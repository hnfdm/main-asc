import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Menggunakan CopyBlock dari react-code-blocks

const Overview = () => {

  const markdown = `
#### Download File Binary

\`\`\`bash
curl -O https://dill-release.s3.ap-southeast-1.amazonaws.com/linux/dill.tar.gz
\`\`\`

\`\`\`bash
tar -xzvf dill.tar.gz && cd dill
\`\`\`

\`\`\`bash
./dill_validators_gen new-mnemonic --num_validators=1 --chain=andes --folder=./
\`\`\`

- Pilih English 2x
- Buat Katasandi dan Isi 2500
- Simpan Pharse
- Masukan Phase di VPS

\`\`\`bash
./validator_keys
\`\`\`

\`\`\`bash
./dill-node accounts import --andes --wallet-dir ./keystore --keys-dir validator_keys/ --accept-terms-of-use
\`\`\`

\`\`\`bash
echo <my-password> > walletPw.txt
\`\`\`

My-Password Ganti Dengan Password Kalian

#### Start Light Node

\`\`\`bash
./start_light.sh -p walletPw.txt
\`\`\`

#### Check Logs Node

\`\`\`bash
ps -ef | grep dill
\`\`\`

#### Backup Wallet Json

\`\`\`bash
~/dill$ cat ./validator_keys/deposit_data-xxxx.json
\`\`\`

#### Claim Faucet on Discord

- Discord : https://discord.com/channels/1236933703251394570/1260145654509076542
- Visit : https://staking.dill.xyz/
- Connect EVM Wallet Metamask
- Import Your Data Validator Keys Json ~/dill$ cat ./validator_keys/deposit_data-xxxx.json
- Send Deposit and Approve Metamask
- Done

#### Check Your Node

Paste Your Publickey : https://andes.dill.xyz/validators
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
