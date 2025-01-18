import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Menggunakan CopyBlock

const Overview = () => {

  const markdown = `

### Snapshoot

\`\`\`bash
sudo apt install lz4
sudo systemctl stop fiammad
fiammad tendermint unsafe-reset-all --home $HOME/.fiammad --keep-addr-book
curl -L http://filex.bangpateng.xyz/snapshot/fimma/fimma-latest.tar.lz4 | tar -Ilz4 -xf - -C $HOME/.fimma
sudo systemctl restart fiammad
sudo journalctl -u fiammad -f -o cat
\`\`\`

### RPC

\`\`\`bash
https://rpc-fimma.bangpateng.xyz
\`\`\`

### API

\`\`\`bash
https://api-fimma.bangpateng.xyz
\`\`\`

### Genesis

\`\`\`bash
https://filex.bangpateng.xyz/snapshot/fimma/genesis.json
Addrbook
\`\`\`

### Addrbooks

\`\`\`bash
https://filex.bangpateng.xyz/snapshot/fimma/addrbook.json
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
