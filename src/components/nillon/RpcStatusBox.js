import React, { useEffect, useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import NetworkModal from '../NetworkModal';
import './RpcStatusBox.css'; // 

const RpcStatusBox = () => {
  const [blockHeight, setBlockHeight] = useState(null);
  const [rpcStatus, setRpcStatus] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchBlockHeight = async () => {
      try {
        const response = await fetch('https://testnet-nillion-rpc.lavenderfive.com/status?');
        const data = await response.json();
        const height = data.result.sync_info.latest_block_height;
        setBlockHeight(height);
      } catch (error) {
        console.error('Failed to fetch block height:', error);
        setRpcStatus(false);
      }
    };

    fetchBlockHeight();
    const interval = setInterval(fetchBlockHeight, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rpc-status-box">
      <div className="rpc-status-content">
        <div className="project-info">
          <span className="project-name">Nillion</span>
          <FiRefreshCcw
            size={20}
            className="refresh-icon"
            onClick={() => setModalIsOpen(true)}
          />
        </div>
        <div className="chain-info"><strong>Chain ID :</strong> nillion-chain-testnet-1</div>
        <div className="block-info"><strong>Block Height :</strong> {blockHeight !== null ? blockHeight : 'Loading...'}</div>
        <div className="rpc-info">
          <strong>RPC Status :</strong>
          <span className={`rpc-status-indicator ${rpcStatus ? 'online' : 'offline'}`}></span>
        </div>
        <div className="explorer-link">
          <a href="https://testnet.ping.pub/nillion" target="_blank" rel="noopener noreferrer">Explorer</a>
        </div>
      </div>

      {/* Modal */}
      <NetworkModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
    </div>
  );
};

export default RpcStatusBox;
