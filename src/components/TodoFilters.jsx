import React from 'react';
import { CheckSquare, Trash2 } from 'lucide-react';

const TodoFilters = ({ currentFilter, setFilter, onClearCompleted, onClearAll, onMarkAll, totalTodos, hasCompleted }) => {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      <div className="flex-between" style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                fontSize: '0.85rem',
                fontWeight: '600',
                backgroundColor: currentFilter === f ? 'var(--primary)' : 'transparent',
                color: currentFilter === f ? '#fff' : 'var(--text-muted)',
                boxShadow: currentFilter === f ? '0 4px 8px var(--primary-glow)' : 'none',
              }}
            >
              {f}
            </button>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {totalTodos > 0 && (
            <button
              onClick={onMarkAll}
              className="flex-center"
              title="Mark All Completed"
              style={{ 
                background: 'rgba(16, 185, 129, 0.1)', 
                color: 'var(--success)', 
                padding: '0.5rem', 
                borderRadius: '8px' 
              }}
            >
              <CheckSquare size={18} />
            </button>
          )}
          {totalTodos > 0 && (
            <button
              onClick={onClearAll}
              className="flex-center"
              title="Clear All Tasks"
              style={{ 
                background: 'rgba(239, 68, 68, 0.1)', 
                color: 'var(--error)', 
                padding: '0.5rem', 
                borderRadius: '8px' 
              }}
            >
              <Trash2 size={18} />
            </button>
          )}
        </div>
      </div>
      
      {hasCompleted && (
        <button
          onClick={onClearCompleted}
          style={{
            alignSelf: 'flex-end',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            fontWeight: '600',
            background: 'none',
            textDecoration: 'underline',
            textUnderlineOffset: '4px'
          }}
        >
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default TodoFilters;
