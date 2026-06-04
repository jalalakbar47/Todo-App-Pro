import React, { useEffect, useState } from 'react';

const ProgressRing = ({ percentage, size = 60, strokeWidth = 6 }) => {
  const [offset, setOffset] = useState(0);
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - percentage) / 100) * circumference;
    setOffset(progressOffset);
  }, [percentage, circumference]);

  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          stroke="var(--border)"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="var(--primary)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          style={{ 
            strokeDashoffset: offset, 
            transition: 'stroke-dashoffset 0.8s ease-in-out',
            strokeLinecap: 'round'
          }}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <span style={{ position: 'absolute', fontSize: '0.75rem', fontWeight: '800', color: 'var(--text-main)' }}>
        {Math.round(percentage)}%
      </span>
    </div>
  );
};

export default ProgressRing;
