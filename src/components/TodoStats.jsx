import React, { useState, useEffect } from 'react';
import { ListTodo, CheckCircle, Activity, TrendingUp } from 'lucide-react';
import ProgressBar from './ProgressBar';
import ProgressRing from './ProgressRing';

const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) {
      setCount(end);
      return;
    };
    
    let totalMiliseconds = 500;
    let incrementTime = totalMiliseconds / end;
    
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}</span>;
};

const TodoStats = ({ todos }) => {
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  const getMotivation = () => {
    if (total === 0) return "Add your first task to start your journey!";
    if (percentage === 100) return "Amazing job! You've crushed all your tasks today! 🚀";
    if (percentage >= 50) return `You've completed ${Math.round(percentage)}% of your tasks. Keep the momentum going!`;
    return "Every step counts. Let's tackle your next task!";
  };

  const statCards = [
    { label: 'Total', value: total, icon: <ListTodo size={20} />, color: 'var(--primary)', bg: 'rgba(79, 70, 229, 0.1)' },
    { label: 'Active', value: active, icon: <Activity size={20} />, color: 'var(--warning)', bg: 'rgba(245, 158, 11, 0.1)' },
    { label: 'Completed', value: completed, icon: <CheckCircle size={20} />, color: 'var(--success)', bg: 'rgba(16, 185, 129, 0.1)' },
  ];

  return (
    <div className="animate-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
        {statCards.map((stat, i) => (
          <div key={i} className="glass-card flex-center" style={{ 
            padding: '1.25rem', 
            flexDirection: 'column', 
            gap: '0.75rem',
            animationDelay: `${i * 0.1}s`,
            transitionDelay: `${i * 0.05}s`
          }}>
            <div className="flex-center" style={{ 
              width: '42px', 
              height: '42px', 
              borderRadius: '12px', 
              backgroundColor: stat.bg, 
              color: stat.color 
            }}>
              {stat.icon}
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: '800' }}>
                <AnimatedCounter value={stat.value} />
              </div>
              <div style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ flexShrink: 0 }}>
          <ProgressRing percentage={percentage} size={80} strokeWidth={8} />
        </div>
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <ProgressBar percentage={percentage} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: '12px', background: 'var(--border)' }}>
            <TrendingUp size={18} color="var(--primary)" />
            <p style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-main)' }}>
              {getMotivation()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoStats;
