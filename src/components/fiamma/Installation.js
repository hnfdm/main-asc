import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Menggunakan CopyBlock
import ValidatorForm from './ValidatorForm'; // Import the ValidatorForm

const Overview = () => {
  const [validatorData, setValidatorData] = useState({
    moniker: 'your-moniker',
    keybaseId: 'your-keybase-id',
    details: 'your-details',
    website: 'your-website',
  });

  const handleUpdate = (data) => {
    setValidatorData(data);
  };

  const markdownBeforeForm = `
### Auto Install
\`\`\`bash
wget https://data.bangpateng.xyz/file/uploads/fiamma.sh && chmod +x fiamma.sh && ./fiamma.sh && rm fiamma.sh
\`\`\`

### Check Status Node

Noted : Make Sure Status is "False" to Continue Next Step

\`\`\`bash
fiammad status 2>&1 | jq .SyncInfo
\`\`\`

### Create or Import Your Wallet
\`\`\`bash
# Create New Wallet
fiammad keys add wallet
\`\`\`

\`\`\`bash
# Recover existing key
fiammad keys add wallet --recover
\`\`\`

### Check Balance
\`\`\`bash
fiammad q bank balances $(fiammad keys show wallet -a)
\`\`\`

### Create Validator
Fill in and change according to your node data
`;

  const markdownAfterForm = `
\`\`\`bash
fiammad tx staking create-validator \\
--amount 1000000ufia \\
--pubkey $(fiammad tendermint show-validator) \\
--moniker "${validatorData.moniker}" \\
--identity "${validatorData.keybaseId}" \\
--details "${validatorData.details}" \\
--website "${validatorData.website}" \\
--chain-id fiamma-testnet-1 \\
--commission-rate 0.05 \\
--commission-max-rate 0.20 \\
--commission-max-change-rate 0.01 \\
--min-self-delegation 1 \\
--from wallet \\
--gas-adjustment 1.4 \\
--gas auto \\
--fees 800ufia
\`\`\`
`;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* Limit the width */}
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CopyBlock
                text={String(children).replace(/\n$/, '')}
                language={match[1]}
                showLineNumbers={true}
                theme={dracula}
                codeBlock
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {markdownBeforeForm}
      </ReactMarkdown>
      
      <ValidatorForm onUpdate={handleUpdate} /> {/* Render the ValidatorForm below the Create Validator heading */}
      
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <CopyBlock
                text={String(children).replace(/\n$/, '')}
                language={match[1]}
                showLineNumbers={true}
                theme={dracula}
                codeBlock
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {markdownAfterForm}
      </ReactMarkdown>
    </div>
  );
};

export default Overview;
