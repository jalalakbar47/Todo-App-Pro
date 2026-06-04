import React from 'react';
import { Search, X } from 'lucide-react';

const SearchBox = ({ value, onChange }) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <Search 
        size={18} 
        style={{ 
          position: 'absolute', 
          left: '12px', 
          top: '50%', 
          transform: 'translateY(-50%)',
          color: 'var(--text-muted)'
        }} 
      />
      <input
        type="text"
        placeholder="Search your tasks..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '100%',
          paddingLeft: '40px',
          paddingRight: value ? '40px' : '15px',
          borderRadius: '12px',
          fontSize: '0.925rem'
        }}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            color: 'var(--text-muted)'
          }}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBox;
