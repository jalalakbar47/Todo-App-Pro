import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import TodoFilters from './components/TodoFilters';
import ThemeToggle from './components/ThemeToggle';
import SearchBox from './components/SearchBox';
import Toast from './components/Toast';
import Modal from './components/Modal';
import { loadTodos, saveTodos, loadTheme, saveTheme } from './utils/localStorage';

// Inline brand SVGs (Lucide doesn't include brand icons)
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);


function App() {
  const [todos, setTodos] = useState(loadTodos());
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [theme, setTheme] = useState(loadTheme() || 'light');
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const addTodo = (text, description, category) => {
    const isDuplicate = todos.some(t => t.text.toLowerCase() === text.toLowerCase());
    if (isDuplicate) {
      return { success: false, message: 'This task already exists!' };
    }
    const newTodo = {
      id: Date.now(),
      text,
      description,
      category,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
    return { success: true };
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setModal({
      title: 'Delete Task?',
      message: 'Are you sure you want to remove this task from your list? This action is permanent.',
      onConfirm: () => {
        setTodos(todos.filter(t => t.id !== id));
        setModal(null);
        showToast('Task removed successfully', 'info');
      }
    });
  };

  const editTodo = (id, newText, newDescription, newCategory) => {
    setTodos(todos.map(t => t.id === id ? { ...t, text: newText, description: newDescription, category: newCategory } : t));
    showToast('Task updated', 'success');
  };

  const clearCompleted = () => {
    const count = todos.filter(t => t.completed).length;
    setTodos(todos.filter(t => !t.completed));
    showToast(`Removed ${count} completed tasks`, 'info');
  };

  const clearAll = () => {
    setModal({
      title: 'Clear All Tasks?',
      message: 'This will delete every single task in your list. Are you absolutely sure?',
      onConfirm: () => {
        setTodos([]);
        setModal(null);
        showToast('All tasks cleared', 'error');
      }
    });
  };

  const markAllCompleted = () => {
    setTodos(todos.map(t => ({ ...t, completed: true })));
    showToast('All tasks marked as completed', 'success');
  };

  const filteredTodos = todos
    .filter(t => {
      // Status Filter
      if (filter === 'Active') return !t.completed;
      if (filter === 'Completed') return t.completed;
      return true;
    })
    .filter(t => {
      // Search Filter
      const search = searchQuery.toLowerCase();
      return (
        t.text.toLowerCase().includes(search) ||
        (t.description && t.description.toLowerCase().includes(search))
      );
    });

  return (
    <div className="app-container">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <TodoStats todos={todos} />

      <TodoForm onAdd={addTodo} onShowToast={showToast} />

      <div className="glass-card animate-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', animationDelay: '0.4s' }}>
        <SearchBox value={searchQuery} onChange={setSearchQuery} />

        <TodoFilters
          currentFilter={filter}
          setFilter={setFilter}
          onClearCompleted={clearCompleted}
          onClearAll={clearAll}
          onMarkAll={markAllCompleted}
          totalTodos={todos.length}
          hasCompleted={todos.some(t => t.completed)}
        />

        <TodoList
          todos={filteredTodos}
          isSearching={!!searchQuery}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {modal && (
        <Modal
          title={modal.title}
          message={modal.message}
          onConfirm={modal.onConfirm}
          onCancel={() => setModal(null)}
        />
      )}

      <footer className="animate-up" style={{
        textAlign: 'center',
        marginTop: '2rem',
        padding: '2rem 0',
        color: 'var(--text-muted)',
        fontSize: '0.875rem',
        borderTop: '1px solid var(--border)',
        animationDelay: '0.6s'
      }}>
        <div className="flex-center" style={{ marginBottom: '1rem' }}>
          <a href="https://github.com/JalalAkbar" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
            <GithubIcon size={20} />
          </a>
        </div>
        <p style={{ fontSize: '0.8rem', fontStyle: 'italic', marginBottom: '1rem', opacity: 0.7 }}>
          Dedicated To My ❤️ J/S — My Inspiration.
        </p>
        <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Todo App Pro • v1.0.0</p>
        <p>&copy; {new Date().getFullYear()} Jalal Akbar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
