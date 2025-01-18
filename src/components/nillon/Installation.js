import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Menggunakan CopyBlock

const Overview = () => {

  const markdown = `

#### Install Auto

\`\`\`bash
wget https://data.bangpateng.xyz/file/uploads/nillon.sh && chmod +x nillon.sh && ./nillon.sh && rm nillon.sh
\`\`\`

- Copy Address ID and Pubkey
- Paste Address ID and Claim Faucet : https://faucet.testnet.nillion.com/

#### Backup Private Key, Address and Pubkey

\`\`\`bash
sudo cat /root/nillion/accuser/credentials.json
\`\`\`

- Connect Your Kepler Wallet 
- Open Link : https://verifier.nillion.com/
- Connect Keplr (Jadi Claim Faucet di Wallet Keplr dan Wallet Yang di Dapet dari Vps)
- Paste ID and Pubkey
- Verifikasi > Approve
- Waiting 30 - 60 Minutes
- Run

#### Run 

\`\`\`bash
LATEST_BLOCK=$(curl -s https://testnet-nillion-rpc.lavenderfive.com/status | jq -r .result.sync_info.latest_block_height) && \
docker run -d -v ./nillion/accuser:/var/tmp nillion/retailtoken-accuser:v1.0.0 accuse \
  --rpc-endpoint "https://testnet-nillion-rpc.lavenderfive.com" \
  --block-start "$LATEST_BLOCK"
\`\`\`

#### Check Logs

\`\`\`bash
docker logs -f $(docker ps | grep nillion | awk '{print $NF}') --tail 100 | grep -E "Registered:|Secret"
\`\`\`

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
