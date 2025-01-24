import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Overview = () => {

  const markdownBeforeForm = `
### 1. Registration

- Daftar dulu di [Gaia Website](https://www.gaianet.ai/gaia-domain-name?referralCode=RKNxAD)

### 2. Update System
\`\`\`bash
sudo apt update && sudo apt upgrade -y
\`\`\`

### 3. Install Required Libraries
\`\`\`bash
sudo apt-get install libgomp1
\`\`\`

### 4. Run the Installation Script
\`\`\`bash
curl -sSfL 'https://github.com/GaiaNet-AI/gaianet-node/releases/latest/download/install.sh' | bash
\`\`\`

### 5. Source Your Bash Configuration
\`\`\`bash
source ~/.bashrc 
\`\`\`

### 6. Initialize GaiaNet with Configuration
\`\`\`bash
gaianet init --config https://raw.githubusercontent.com/GaiaNet-AI/node-configs/main/qwen2-0.5b-instruct/config.json
\`\`\`


### 7. Start GaiaNet
\`\`\`bash
gaianet start
\`\`\`

### 8. Secude Node ID & Device ID
\`\`\`bash
gaianet info
\`\`\`

### 9. Bind Node on Website
- Open [Node Setting](https://www.gaianet.ai/setting/nodes)
- Connect New Node
- Enter Node ID & Device ID

### 10. Done

`;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' , color: 'white'}}> {/* Limit the width */}
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
    </div>
  );
};

export default Overview;
