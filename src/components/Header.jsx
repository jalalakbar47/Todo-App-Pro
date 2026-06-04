import React from 'react';
import { Target, Calendar } from 'lucide-react';
import { getGreeting, getCurrentFormattedDate } from '../utils/dateUtils';

import ThemeToggle from './ThemeToggle';

const Header = ({ theme, toggleTheme }) => {
  const greeting = getGreeting();
  const date = getCurrentFormattedDate();

  return (
    <header className="flex-between animate-up" style={{ marginBottom: '1rem', width: '100%', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
        <div className="flex-center" style={{ 
          width: '56px', 
          height: '56px', 
          background: 'var(--primary)', 
          borderRadius: '16px', 
          color: '#fff',
          boxShadow: '0 8px 16px var(--primary-glow)'
        }}>
          <Target size={32} />
        </div>
        <div>
          <h1 className="title-gradient" style={{ fontSize: '1.75rem', marginBottom: '4px' }}>Todo App Pro</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>
            {greeting}, stay organized and productive.
          </p>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="glass-card" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderRadius: '12px', height: '40px' }}>
          <Calendar size={18} color="var(--primary)" />
          <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-main)', whiteSpace: 'nowrap' }}>{date}</span>
        </div>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
