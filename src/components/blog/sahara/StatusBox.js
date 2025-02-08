import React, { useState } from 'react';
import { FiRefreshCcw, FiArrowLeftCircle } from 'react-icons/fi';
import AIModal from '@components/common/AIModal';
import '@styles/blog/StatusBox.css'; // 

const StatusBox = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="rpc-status-box">
      <div className="rpc-status-content">
        <div className="project-info">
          <a href="/blog/" className="back-link">
            <FiArrowLeftCircle size={23} className="back-icon" />
          </a>
          <span className="project-name">Sahara AI</span>
          <FiRefreshCcw
            size={20}
            className="refresh-icon"
            onClick={() => setModalIsOpen(true)}
          />
        </div>
      </div>

      {/* Modal */}
      <AIModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
    </div>
  );
};

export default StatusBox;
