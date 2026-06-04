import React from 'react';

const Modal = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2000,
        backdropFilter: 'blur(4px)',
      }}
      onClick={onCancel}
    >
      <div
        className="glass-card animate-scale"
        style={{ width: '90%', maxWidth: '450px', padding: '2.5rem', textAlign: 'center' }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '800' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6', fontSize: '1rem' }}>{message}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button
            onClick={onCancel}
            style={{
              padding: '0.75rem 1.75rem',
              borderRadius: '12px',
              backgroundColor: 'var(--border)',
              color: 'var(--text-main)',
              fontSize: '0.9rem',
            }}
          >
            Go Back
          </button>
          <button
            onClick={onConfirm}
            style={{
              padding: '0.75rem 1.75rem',
              borderRadius: '12px',
              backgroundColor: 'var(--error)',
              color: '#fff',
              fontSize: '0.9rem',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
            }}
          >
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
