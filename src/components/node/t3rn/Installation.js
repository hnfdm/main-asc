import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Menggunakan CopyBlock dari react-code-blocks

const Overview = () => {

  const markdown = `

  ### Tutorial for Running the T3rn Executor and Obtaining the Executor Role on Discord

#### 1. Claim Faucet

- Claim Faucet: https://faucet.brn.t3rn.io/ (Minimum 0.1 BRN required to run the Executor)

#### 2. Automatic Installation

\`\`\`bash
bash <(curl -s https://data.bangpateng.xyz/file/uploads/T3rn.sh)
\`\`\`

- Paste your wallet's private key when prompted

### 3. How To Get Role 'Executor'

- Join the Discord: https://discord.gg/9D428mKe
- Open a support ticket
- Submit a screenshot showing that you have the Executor running
- Wait for approval to receive the role

#### 4. Useful Commands

\`\`\`bash
# Check Log
sudo journalctl -u executor -f
# Restart
sudo systemctl restart executor
# Start
sudo systemctl start executor
# Stop
sudo systemctl Stop executor
\`\`\`

#### 5. Uninstall Executor (Optional)

\`\`\`bash
sudo systemctl stop executor && sudo systemctl disable executor && sudo rm /etc/systemd/system/executor.service && sudo systemctl daemon-reload && rm -rf executor-linux-v0.20.0.tar.gz executor && systemctl status executor
\`\`\`

### T3rn Incentivized Testnet Earn BRN tokens On Every Bridge and Swap

- Join Telegram : https://t.me/bangpateng_airdrop/58949
- Complete All Task
- Done
`;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* Membatasi lebar konten */}
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
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Overview;
