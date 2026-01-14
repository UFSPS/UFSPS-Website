import React from 'react';
import './styles/PageContainer.css';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

function PageContainer({ children, className = '', style }: PageContainerProps) {
  return (
    <div className={`page-container ${className}`} style={style}>
      {children}
    </div>
  );
}

export default PageContainer;