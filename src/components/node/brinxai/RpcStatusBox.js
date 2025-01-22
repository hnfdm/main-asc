import React, { useState } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
import NetworkModal from '@components/common/RunningModal';
import '@styles/node/RpcStatusBox.css'; // 

const RpcStatusBox = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="rpc-status-box">
      <div className="rpc-status-content">
        <div className="project-info">
          <span className="project-name">Brinx AI</span>
          <FiRefreshCcw
            size={20}
            className="refresh-icon"
            onClick={() => setModalIsOpen(true)}
          />
        </div>
      </div>

      {/* Modal */}
      <NetworkModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
    </div>
  );
};

export default RpcStatusBox;
