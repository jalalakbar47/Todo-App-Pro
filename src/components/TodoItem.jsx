import React, { useState } from 'react';
import { Trash2, Edit2, Check, Clock } from 'lucide-react';
import CategoryBadge from './CategoryBadge';
import { formatRelativeDate, formatTime } from '../utils/dateUtils';

const CATEGORY_COLORS = {
  Personal: 'var(--cat-personal)',
  Work: 'var(--cat-work)',
  Study: 'var(--cat-study)',
  Shopping: 'var(--cat-shopping)',
  Other: 'var(--cat-other)',
};

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [editDesc, setEditDesc] = useState(todo.description || '');

  const handleEdit = () => {
    if (isEditing) {
      if (!editText.trim()) return;
      onEdit(todo.id, editText.trim(), editDesc.trim(), todo.category);
    }
    setIsEditing(!isEditing);
  };

  const categoryColor = CATEGORY_COLORS[todo.category] || CATEGORY_COLORS.Other;

  return (
    <div 
      className="glass-card animate-scale" 
      style={{ 
        padding: '1.5rem', 
        display: 'flex', 
        alignItems: 'flex-start', 
        gap: '1.25rem', 
        borderLeft: `6px solid ${categoryColor}`,
        opacity: todo.completed ? 0.6 : 1,
        transition: 'var(--transition)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={() => onToggle(todo.id)}
        className="flex-center"
        style={{
          minWidth: '28px',
          height: '28px',
          borderRadius: '8px',
          marginTop: '4px',
          border: `2px solid ${todo.completed ? 'var(--success)' : 'var(--border)'}`,
          backgroundColor: todo.completed ? 'var(--success)' : 'transparent',
          boxShadow: todo.completed ? '0 4px 12px rgba(16, 185, 129, 0.3)' : 'none',
          color: '#fff',
        }}
      >
        {todo.completed && <Check size={18} strokeWidth={3} />}
      </button>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {isEditing ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%' }}>
            <input
              autoFocus
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              style={{ padding: '0.5rem 1rem', width: '100%' }}
              placeholder="Task title"
            />
            <textarea
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
              maxLength={200}
              rows={2}
              style={{ 
                padding: '0.75rem 1rem', 
                width: '100%',
                background: 'var(--border)',
                border: '1px solid transparent',
                borderRadius: '8px',
                color: 'var(--text-main)',
                fontSize: '0.875rem',
                resize: 'none'
              }}
              placeholder="Task description"
            />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <h3
              style={{
                fontSize: '1.15rem',
                fontWeight: '700',
                color: todo.completed ? 'var(--text-muted)' : 'var(--text-main)',
                textDecoration: todo.completed ? 'line-through' : 'none',
                lineHeight: '1.4'
              }}
            >
              {todo.text}
            </h3>
            {todo.description && (
              <p
                style={{
                  fontSize: '0.925rem',
                  color: 'var(--text-muted)',
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word'
                }}
              >
                {todo.description}
              </p>
            )}
          </div>
        )}
        
        <div className="flex-between" style={{ marginTop: '0.5rem', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: '600' }}>
              <Clock size={14} />
              <span>{formatRelativeDate(todo.createdAt)}</span>
              <span>•</span>
              <span>{formatTime(todo.createdAt)}</span>
            </div>
            <CategoryBadge category={todo.category || 'Personal'} />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={handleEdit}
              style={{ 
                padding: '0.5rem', 
                background: 'var(--border)', 
                color: 'var(--text-muted)',
                borderRadius: '8px'
              }}
              className="hover-primary"
            >
              {isEditing ? <Check size={18} /> : <Edit2 size={18} />}
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              style={{ 
                padding: '0.5rem', 
                background: 'rgba(239, 68, 68, 0.1)', 
                color: 'var(--error)',
                borderRadius: '8px'
              }}
              className="hover-error"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
