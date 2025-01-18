import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CopyBlock, dracula } from 'react-code-blocks'; // Menggunakan react-code-blocks

const Cheatsheet = () => {

  const markdown = `

#### 1. Unjail validator

\`\`\`bash
fiammad tx slashing unjail --from wallet --chain-id fiamma-testnet-3 --gas-adjustment 1.4 --gas auto --fees 800note -y
\`\`\`

#### 2. Validator jail reason

\`\`\`bash
fiammad query slashing signing-info $(fiammad tendermint show-validator)
\`\`\`

#### 3. List active validator

\`\`\`bash
fiammad q staking validators -oj --limit=3000 | jq '.validators[] | select(.status=="BOND_STATUS_BONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " \t " + .description.moniker' | sort -gr | nl
\`\`\`

#### 4. List inactive validator

\`\`\`bash
fiammad q staking validators -oj --limit=3000 | jq '.validators[] | select(.status=="BOND_STATUS_UNBONDED")' | jq -r '(.tokens|tonumber/pow(10; 6)|floor|tostring) + " \t " + .description.moniker' | sort -gr | nl
\`\`\`

#### 5. View validator details

\`\`\`bash
fiammad q staking validator $(fiammad keys show wallet --bech val -a)
\`\`\`

#### 6. Managing Tokens Withdraw reward from all validator

\`\`\`bash
fiammad tx distribution withdraw-all-rewards --from wallet --chain-id fiamma-testnet-3 --gas-adjustment 1.4 --gas auto --fees 800note -y
\`\`\`

#### 7. Withdraw reward and commission

\`\`\`bash
fiammad tx distribution withdraw-rewards $(fiammad keys show wallet --bech val -a) --commission --from wallet --chain-id fiamma-testnet-3 --fees 800note -y
\`\`\`

#### 8. Delegate tokens to your validator

\`\`\`bash
fiammad tx staking delegate $(fiammad keys show wallet --bech val -a) 100000note --from wallet --chain-id fiamma-testnet-2 --gas-adjustment 1.5 --gas auto --gas-prices 1note
\`\`\`

#### 9. Delegate token to other validator, change as you like

\`\`\`bash
fiammad tx staking delegate <to-valoper-address> 1000000note --from wallet --chain-id fiamma-testnet-2 --gas-adjustment 1.4 --gas auto --fees 800note -y
\`\`\`

#### 10. Redelegate to another validator

\`\`\`bash
fiammad tx staking redelegate $(fiammad keys show wallet --bech val -a) <to-valoper-address> 1000000note --from wallet --chain-id fiamma-testnet-2 --gas-adjustment 1.4 --gas auto --fees 800note -y
\`\`\`

#### 11. Unbond token from your own validator

\`\`\`bash
fiammad tx staking unbond $(fiammad keys show wallet --bech val -a) 1000000note --from wallet --chain-id fiamma-testnet-2 --gas-adjustment 1.4 --gas auto --fees 800note -y
\`\`\`

#### 12. Send token to the wallet

\`\`\`bash
fiammad tx bank send wallet <to-wallet-address> 1000000note --from wallet --chain-id fiamma-testnet-2 --gas-adjustment 1.4 --gas auto --fees 800note -y
\`\`\`

#### 13. Governance Query list proposal

\`\`\`bash
fiammad query gov proposals
\`\`\`

#### 14. View proposal by ID

\`\`\`bash
fiammad query gov proposal 1
\`\`\`

#### 15. Vote option yes

\`\`\`bash
fiammad tx gov vote 1 yes --from wallet --chain-id fiamma-testnet-2 --gas-adjustment 1.4 --gas auto --fees 800note -y
\`\`\`

#### 16. Vote option no

\`\`\`bash
fiammad tx gov vote 1 no --from wallet --chain-id fiamma-testnet-2 --gas-adjustment 1.4 --gas auto --fees 800note -y
\`\`\`

#### 17. Vote option abstain

\`\`\`bash
fiammad tx gov vote 1 abstain --from wallet --chain-id fiamma-testnet-2 --gas-adjustment 1.4 --gas auto --fees 800note -y
\`\`\`

#### 18. Vote option No With Veto

\`\`\`bash
fiammad tx gov vote 1 NoWithVeto --from wallet --chain-id fiamma-testnet-2 --gas-adjustment 1.4 --gas auto --fees 800note -y
Usefulness
\`\`\`

#### 19. Please note that updating the custom port is optional! Update custom port

\`\`\`bash
CUSTOM_PORT=248
sed -i -e "s%^proxy_app = \\"tcp://127.0.0.1:26658\\"%proxy_app = \\"tcp://127.0.0.1:\${CUSTOM_PORT}58\\"%; s%^laddr = \\"tcp://127.0.0.1:26657\\"%laddr = \\"tcp://127.0.0.1:\${CUSTOM_PORT}57\\"%; s%^pprof_laddr = \\"localhost:6060\\"%pprof_laddr = \\"localhost:\${CUSTOM_PORT}60\\"%; s%^laddr = \\"tcp://0.0.0.0:26656\\"%laddr = \\"tcp://0.0.0.0:\${CUSTOM_PORT}56\\"%; s%^prometheus_listen_addr = \\":26660\\"%prometheus_listen_addr = \\":\${CUSTOM_PORT}66\\"%" $HOME/.fiammad/config/config.toml

sed -i -e "s%^address = \\"tcp://0.0.0.0:1317\\"%address = \\"tcp://0.0.0.0:\${CUSTOM_PORT}17\\"%; s%^address = \\":8080\\"%address = \\":\${CUSTOM_PORT}80\\"%; s%^address = \\"0.0.0.0:9090\\"%address = \\"0.0.0.0:\${CUSTOM_PORT}90\\"%; s%^address = \\"0.0.0.0:9091\\"%address = \\"0.0.0.0:\${CUSTOM_PORT}91\\"%" $HOME/.fiammad/config/app.toml
\`\`\`

#### 20. Disable indexer

\`\`\`bash
sed -i -e 's|^indexer *=.*|indexer = "null"|' $HOME/.fiammad/config/config.toml
\`\`\`

#### 21. Enable indexer

\`\`\`bash
sed -i -e 's|^indexer *=.*|indexer = "kv"|' $HOME/.fiammad/config/config.toml
\`\`\`

#### 22. Pruning update

\`\`\`bash
sed -i \
  -e 's|^pruning *=.*|pruning = "custom"|' \
  -e 's|^pruning-keep-recent *=.*|pruning-keep-recent = "100"|' \
  -e 's|^pruning-keep-every *=.*|pruning-keep-every = "0"|' \
  -e 's|^pruning-interval *=.*|pruning-interval = "19"|' \
  $HOME/.fiammad/config/app.toml
\`\`\`

#### 23. Maintenance Get validator information

\`\`\`bash
fiammad status 2>&1 | jq .ValidatorInfo
\`\`\`

#### 24. Get sync information

\`\`\`bash
fiammad status 2>&1 | jq .SyncInfo
\`\`\`

#### 25. Get node peer

\`\`\`bash
echo $(fiammad tendermint show-node-id)'@'$(curl -s ifconfig.me)':'$(cat $HOME/.fiammad/config/config.toml | sed -n '/Address to listen for incoming connection/{n;p;}' | sed 's/.*://; s/".*//')
\`\`\`

#### 26. Check validator keys

\`\`\`bash
[[ $(fiammad q staking validator $(fiammad keys show wallet --bech val -a) -oj | jq -r .consensus_pubkey.key) = $(fiammad status | jq -r .ValidatorInfo.PubKey.value) ]] && echo -e "\n\e[1m\e[32mTrue\e[0m\n" || echo -e "\n\e[1m\e[31mFalse\e[0m\n"
\`\`\`

#### 27. Get live peers

\`\`\`bash
curl -sS http://localhost:24857/net_info | jq -r '.result.peers[] | "\(.node_info.id)@\(.remote_ip):\(.node_info.listen_addr)"' | awk -F ':' '{print $1":"$(NF)}'
\`\`\`

#### 28. Configure minimum gas prices

\`\`\`bash
sed -i -e "s/^minimum-gas-prices *=.*/minimum-gas-prices = \"0note\"/" $HOME/.fiammad/config/app.toml
\`\`\`

#### 29. Enable Prometheus

\`\`\`bash
sed -i -e "s/prometheus = false/prometheus = true/" $HOME/.fiammad/config/config.toml
\`\`\`

#### 30. Reset chain data

\`\`\`bash
fiammad tendermint unsafe-reset-all --keep-addr-book --home $HOME/.fiammad --keep-addr-book
\`\`\`

Before moving on to the next step, be aware that all chain data will be erased. Ensure you’ve created a backup of your priv_validator_key.json! Remove node

\`\`\`bash
cd $HOME
sudo systemctl stop fiamma
sudo systemctl disable fiamma
sudo rm /etc/systemd/system/fiamma.service
sudo systemctl daemon-reload
sudo rm -f $(which fiammad)
sudo rm -rf $HOME/.fiammad
sudo rm -rf $HOME/fiamma
sudo rm -rf $HOME/go
\`\`\`

`;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* Limit the width */}
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
