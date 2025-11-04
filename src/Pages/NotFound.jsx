import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-content not-found">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div className="action-buttons">
          <button onClick={() => navigate('/')} className="primary-btn"> Go Home </button>
          <button onClick={() => navigate(-1)} className="secondary-btn"> Go Back </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;