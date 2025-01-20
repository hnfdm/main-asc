import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Menggunakan CopyBlock dari react-code-blocks

const Overview = () => {

  const markdown = `

### Snapshoot (Block Height 187783 | 8.1 GB)

\`\`\`bash
sudo apt install lz4
sudo systemctl stop symphonyd
symphonyd tendermint unsafe-reset-all --home $HOME/.symphonyd --keep-addr-book
curl -L http://filex.bangpateng.xyz/snapshot/symphony/symphony-latest.tar.lz4 | tar -Ilz4 -xf - -C $HOME/.symphony
sudo systemctl restart symphonyd
sudo journalctl -u symphonyd -f -o cat
\`\`\`

### RPC

\`\`\`bash
https://rpc-symphony.bangpateng.xyz
\`\`\`

### API

\`\`\`bash
https://api-symphony.bangpateng.xyz
\`\`\`

### Genesis

\`\`\`bash
https://filex.bangpateng.xyz/snapshot/symphony/genesis.json
\`\`\`

### Addrbooks

\`\`\`bash
https://filex.bangpateng.xyz/snapshot/symphony/addrbook.json
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
