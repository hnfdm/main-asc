import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Menggunakan CopyBlock dari react-code-blocks

const Overview = () => {

  const markdown = `

  # Tutorial Node Incentivized Autonomys

- Make Sure You Have Subwallet Extension
- Open the Link and Connect Wallet: https://astral.autonomys.xyz/gemini-3h/consensus?walletSidekick=open
- Copy Your Autonomys Address
- Done

#### Install Auto

\`\`\`bash
bash <(curl -s https://data.bangpateng.xyz/file/uploads/Autonomys.sh)
\`\`\`

- Enter Your Autonomys Address
- Enter Port Jika Ingin Mengubahnya (Jika Tidak Langsung Tekan Enter Saja)

#### Start and Command Lainnya

\`\`\`bash
#Start
sudo systemctl start subspace-node && sudo systemctl start subspace-farmer
#Stop
sudo systemctl stop subspace-node && sudo systemctl stop subspace-farmer
#Enable Node
sudo systemctl enable subspace-node && sudo systemctl enable subspace-farmer
#Disable Node
sudo systemctl disable subspace-node && sudo systemctl disable subspace-farmer
#Check Status Node
sudo systemctl status subspace-node
#Check Farmer Status
sudo systemctl status subspace-farmer
#View Node Logs
sudo journalctl -f -o cat -u subspace-node
#View Farmer Log
sudo journalctl -f -o cat -u subspace-farmer
#Check Reward
sudo journalctl -o cat -u subspace-farmer --since="1 hour ago" | grep -i "Successfully signed reward hash" | wc -l
\`\`\`

#### Delete Node

\`\`\`bash
sudo systemctl stop subspace-node && sudo systemctl stop subspace-farmer && \
sudo systemctl disable subspace-node && sudo systemctl disable subspace-farmer && \
sudo rm /etc/systemd/system/subspace-node.service /etc/systemd/system/subspace-farmer.service && \
sudo userdel -r subspace && \
sudo rm -rf /home/subspace/.local/bin/subspace-node /home/subspace/.local/bin/subspace-farmer /home/subspace/.local/share/subspace-node /home/subspace/.local/share/subspace-farmer && \
sudo systemctl daemon-reload
\`\`\`

Docs : https://docs.autonomys.xyz/docs/
https://medium.com/subspace-network/the-phases-of-mainnet-3a08d7aa7178

Twitter : https://x.com/AutonomysNet/status/1832118694211940576

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
