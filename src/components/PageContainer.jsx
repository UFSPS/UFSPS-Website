import './styles/PageContainer.css';

function PageContainer({ children, className = '' }) {
  return (
    <div className={`page-container ${className}`}>
      {children}
    </div>
  );
}

export default PageContainer;