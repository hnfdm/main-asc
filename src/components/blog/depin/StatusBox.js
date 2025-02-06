import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiRefreshCcw, FiArrowLeftCircle } from 'react-icons/fi';
import DePINModal from '@components/common/DePINModal';
import '@styles/blog/StatusBox.css'; // 

const StatusBox = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="rpc-status-box">
      <div className="rpc-status-content">
        <div className="project-info">
          <FiArrowLeftCircle
            size={23}
            className="back-icon"
            onClick={() => navigate("/blog")}
          />
          <span className="project-name">DePIN</span>
          <FiRefreshCcw
            size={20}
            className="refresh-icon"
            onClick={() => setModalIsOpen(true)}
          />
        </div>
      </div>

      {/* Modal */}
      <DePINModal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} />
    </div>
  );
};

export default StatusBox;
