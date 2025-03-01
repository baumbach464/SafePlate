import React from 'react';

function InfoModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✖</button>
        <h2>{title}</h2>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

export default InfoModal;
