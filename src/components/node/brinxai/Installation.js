import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Pastikan menggunakan react-code-blocks

const Overview = () => {

  const markdownBeforeForm = `
### 1. Registration

- Daftar dulu di [Official Website](https://workers.brinxai.com/register.php?ref=4561df45)

### 2. Open Port
\`\`\`bash
sudo ufw allow 5011/tcp
\`\`\`
\`\`\`bash
sudo ufw enable
\`\`\`

### 3. Auto Install
\`\`\`bash
curl -s https://data.zamzasalim.xyz/file/uploads/brinxai.sh | bash
\`\`\`

### 4. Sync to Website

- Login
- Click "Add Node"
- Node Name: (your node name)
- Node IP: (your node ip)
- Node Port: 5011

### 5. Run Relayer
\`\`\`bash
bash <(curl -s https://data.zamzasalim.xyz/file/uploads/brinxai-relayer-node.sh)
\`\`\`

### 6. Run All Model

- Open Port
\`\`\`bash
sudo ufw allow 5003/tcp
sudo ufw allow 5055/tcp
sudo ufw allow 7000/tcp
sudo ufw allow 3007/tcp
sudo ufw enable
\`\`\`

Note: Port ini bisa diganti, jika kalian sudah menjalankan node lain pake port diatas. Tinggal ganti saja gak harus sama.

- For text-ui service
\`\`\`bash
docker run -d --name text-ui --network brinxai-network --cpus=4 --memory=4096m -p 127.0.0.1:5003:5003 admier/brinxai_nodes-text-ui:latest
\`\`\`
- For stable-diffusion service
\`\`\`bash
docker run -d --name stable-diffusion --network brinxai-network --cpus=8 --memory=8192m -p 127.0.0.1:5055:5055 admier/brinxai_nodes-stabled:latest
\`\`\`
- For rembg service
\`\`\`bash
docker run -d --name rembg --network brinxai-network --cpus=2 --memory=2048m -p 127.0.0.1:7000:7000 admier/brinxai_nodes-rembg:latest
\`\`\`
- For upscaler service
\`\`\`bash
docker run -d --name upscaler --network brinxai-network --cpus=2 --memory=2048m -p 127.0.0.1:3007:3007 admier/brinxai_nodes-upscaler:latest
\`\`\`

### 7. Done

Note: Check ulang di dashboard website apakah sudah full sync atau belum.

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
