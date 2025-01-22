import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Menggunakan react-code-blocks

const Cheatsheet = () => {

  const markdown = `

#### 1. FAQ

Kalian yang VPS yang hangus atau mati atau expired atau mau pindah vps. Jgn di hapus vps yang lama biarin offline aja. Cukup add new worker pake vps yang baru. Karena kalo di hapus point dari vps yang lama atau offline bakalan ilang.

#### 2. Status Inactive?

- Worker
\`\`\`bash
docker restart brinxai-worker-nodes-worker-1
\`\`\`
- Relay
\`\`\`bash
docker restart brinxai_relay
\`\`\`

- Stable Diffusion
\`\`\`bash
docker restart stable-diffusion
\`\`\`
- Upscaler
\`\`\`bash
docker restart upscaler
\`\`\`
- Text UI
\`\`\`bash
docker restart text-ui
\`\`\`
- Rembg
\`\`\`bash
docker restart rembg
\`\`\`
`;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', color:'white' }}> {/* Limit the width */}
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
