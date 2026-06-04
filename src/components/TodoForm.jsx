import React, { useState } from 'react';
import { Plus, Tag } from 'lucide-react';

const CATEGORIES = ['Personal', 'Work', 'Study', 'Shopping', 'Other'];

const TodoForm = ({ onAdd, onShowToast }) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Personal');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      onShowToast('Please enter a task title!', 'error');
      return;
    }
    
    if (description.length > 200) {
      onShowToast('Description must be under 200 characters!', 'error');
      return;
    }

    const result = onAdd(text.trim(), description.trim(), category);
    if (result.success) {
      setText('');
      setDescription('');
      onShowToast('Task added successfully!', 'success');
    } else {
      onShowToast(result.message, 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card animate-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', animationDelay: '0.3s' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <label style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-main)', opacity: 0.8 }}>Task Title</label>
        <input
          type="text"
          placeholder="e.g., Design System Update"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ fontSize: '1rem', padding: '0.875rem 1rem' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div className="flex-between">
          <label style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-main)', opacity: 0.8 }}>Description (Optional)</label>
          <span style={{ fontSize: '0.75rem', color: description.length > 200 ? 'var(--error)' : 'var(--text-muted)' }}>
            {description.length}/200
          </span>
        </div>
        <textarea
          placeholder="Add more details about this task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
          rows={3}
          style={{ 
            fontSize: '0.95rem', 
            padding: '1rem',
            background: 'var(--border)',
            border: '1px solid transparent',
            borderRadius: '12px',
            color: 'var(--text-main)',
            resize: 'none',
            fontFamily: 'inherit',
            transition: 'var(--transition)'
          }}
        />
      </div>
      
      <div className="flex-between" style={{ gap: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, minWidth: '200px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.875rem', fontWeight: '700', opacity: 0.8 }}>
            <Tag size={16} />
            Category
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                style={{
                  padding: '0.4rem 0.85rem',
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  backgroundColor: category === cat ? 'var(--primary)' : 'rgba(0,0,0,0.05)',
                  color: category === cat ? '#fff' : 'var(--text-main)',
                  border: `1px solid ${category === cat ? 'var(--primary)' : 'var(--border)'}`,
                  boxShadow: category === cat ? '0 4px 8px var(--primary-glow)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="flex-center"
          style={{
            backgroundColor: 'var(--primary)',
            color: '#fff',
            padding: '0.875rem 2rem',
            borderRadius: '12px',
            boxShadow: '0 8px 16px var(--primary-glow)',
            fontSize: '1rem',
            alignSelf: 'flex-end'
          }}
        >
          <Plus size={20} style={{ marginRight: '8px' }} />
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
