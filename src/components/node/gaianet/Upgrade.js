import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Menggunakan react-code-blocks

const Cheatsheet = () => {

  const markdown = `
### 1. Clone Repo
\`\`\`bash
git clone https://github.com/sipalingnode/autochatgaianet
\`\`\`

### 2. Enter Folder
\`\`\`bash
cd autochatgaianet
\`\`\`

### 3. Install Requirement
\`\`\`bash
npm i
\`\`\`

### 4. Install Screen/Tmux 
\`\`\`bash
apt-get install screen
\`\`\`
\`\`\`bash
sudo apt install tmux
\`\`\`

### 5. Run using Screen/Tmux 
\`\`\`bash
screen -S gaianet
\`\`\`
\`\`\`bash
tmux new -s gaianet
\`\`\`

### 6. Start Script
\`\`\`bash
node autochat.js
\`\`\`

### 7. Minimaze Screen/Tmux
- Screen: CTRL + A D
- Tmux: CTRL + B D

`;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', color:'white'}}> {/* Limit the width */}
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

export default Cheatsheet;
