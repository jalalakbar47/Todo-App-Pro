import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

const Toast = ({ message, type = 'info', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle size={18} />,
    error: <AlertCircle size={18} />,
    info: <Info size={18} />,
  };

  const colors = {
    success: 'var(--success)',
    error: 'var(--error)',
    info: 'var(--primary)',
  };

  return (
    <div
      className="animate-up"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: 'var(--card-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        color: 'var(--text-main)',
        padding: '1.25rem 1.5rem',
        borderRadius: '16px',
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        zIndex: 1000,
        border: '1px solid var(--card-border)',
        borderLeft: `6px solid ${colors[type]}`,
      }}
    >
      <div style={{ color: colors[type], display: 'flex' }}>{icons[type]}</div>
      <span style={{ fontWeight: '600', fontSize: '0.95rem' }}>{message}</span>
      <button 
        onClick={onClose} 
        style={{ 
          color: 'var(--text-muted)', 
          background: 'var(--border)', 
          padding: '4px',
          borderRadius: '50%',
          display: 'flex',
          marginLeft: '0.5rem' 
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default Toast;
