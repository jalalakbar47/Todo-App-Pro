import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
      <div className="flex-between" style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--text-muted)' }}>
        <span>Completion Progress</span>
        <span style={{ color: 'var(--primary)' }}>{Math.round(percentage)}%</span>
      </div>
      <div className="progress-container">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;
