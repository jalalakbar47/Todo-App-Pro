import React from 'react';

const CATEGORY_COLORS = {
  Personal: 'var(--cat-personal)',
  Work: 'var(--cat-work)',
  Study: 'var(--cat-study)',
  Shopping: 'var(--cat-shopping)',
  Other: 'var(--cat-other)',
};

const CategoryBadge = ({ category }) => {
  const color = CATEGORY_COLORS[category] || CATEGORY_COLORS.Other;
  
  return (
    <span 
      className="badge" 
      style={{ 
        backgroundColor: `${color}15`, 
        color: color,
        border: `1px solid ${color}30`
      }}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;
