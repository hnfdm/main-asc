import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Menggunakan CopyBlock dari react-code-blocks

const Overview = () => {

  const markdown = `

 # Tutorial Elixir Earn Reward Node Validator

- Claim Sepolia Faucet : https://www.infura.io/faucet | 
- Open Link : https://testnet-3.elixir.xyz/
- Connect Metamask Wallet
- Mint 1,000 MOCK

#### RUN NODE

- Siapkan Nama Validator Kalian
- Address Kalian dan Private Key
- Done

##### Install Node

\`\`\`bash
bash <(curl -s https://data.bangpateng.xyz/file/uploads/Elixir.sh)
\`\`\`

##### Check Log

\`\`\`bash
docker logs -f elixir
\`\`\`


##### Validator Health Status

\`\`\`bash
curl 127.0.0.1:17690/health | jq
\`\`\`

##### Delete Node

\`\`\`bash
docker stop elixir && docker rm elixir && docker rmi elixirprotocol/validator:v3
\`\`\`

Source Docs Official Guide :
https://docs.elixir.xyz/running-an-elixir-validator

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
