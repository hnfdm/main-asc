import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks
import ValidatorForm from './ValidatorForm'; // Form yang digunakan untuk menangani data validator

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
curl -O https://raw.githubusercontent.com/bangpateng/symphony/main/symphony.sh && chmod +x symphony.sh && ./symphony.sh
\`\`\`

### Check Status Node

Noted: Make Sure Status is "False" to Continue Next Step

\`\`\`bash
symphonyd status 2>&1 | jq .SyncInfo
\`\`\`

### Create or Import Your Wallet
\`\`\`bash
# Create New Wallet
symphonyd keys add wallet
\`\`\`

\`\`\`bash
# Recover existing key
symphonyd keys add wallet --recover
\`\`\`

### Check Balance
\`\`\`bash
symphonyd q bank balances $(symphonyd keys show wallet -a)
\`\`\`

### Create Validator
Fill in and change according to your node data
`;

  const markdownAfterForm = `
\`\`\`bash
symphonyd tx staking create-validator \\
--amount 1000000note \\
--pubkey $(symphonyd tendermint show-validator) \\
--moniker "${validatorData.moniker}" \\
--identity "${validatorData.keybaseId}" \\
--details "${validatorData.details}" \\
--website "${validatorData.website}" \\
--chain-id symphony-testnet-3 \\
--commission-rate 0.05 \\
--commission-max-rate 0.20 \\
--commission-max-change-rate 0.01 \\
--min-self-delegation 1 \\
--from wallet \\
--gas-adjustment 1.4 \\
--gas auto \\
--fees 800note
\`\`\`
`;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}> {/* Limit the width */}
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
      
      <ValidatorForm onUpdate={handleUpdate} /> {/* Form untuk memasukkan data validator */}
      
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
