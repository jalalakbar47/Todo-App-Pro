import React from 'react';
import TodoItem from './TodoItem';
import { ClipboardCheck } from 'lucide-react';

const TodoList = ({ todos, onToggle, onDelete, onEdit, isSearching }) => {
  if (todos.length === 0) {
    return (
      <div className="flex-center animate-scale" style={{ flexDirection: 'column', padding: '5rem 2rem', gap: '1.5rem', color: 'var(--text-muted)' }}>
        <div className="flex-center" style={{ 
          width: '80px', 
          height: '80px', 
          borderRadius: '50%', 
          backgroundColor: 'var(--border)', 
          color: 'var(--text-muted)',
          opacity: 0.6
        }}>
          <ClipboardCheck size={40} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
            {isSearching ? 'No matches found' : 'No tasks yet'}
          </p>
          <p style={{ fontSize: '0.9rem', maxWidth: '250px' }}>
            {isSearching ? 'Try adjusting your search to find what you looking for.' : 'Perfect time to organize your day. Add your first task above!'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
