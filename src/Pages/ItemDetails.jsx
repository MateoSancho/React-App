import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sampleData from '../data/CoffeeOrdersData.js';

function ItemDetails() {  
  const { id } = useParams();
  const navigate = useNavigate();
  const [items, setItems] = useState(sampleData);
  
  //Igual que con lo del dashboard
  //Cargar items del localStorage si existen
  useEffect(() => {
    const savedItems = localStorage.getItem('taskItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  const item = items.find(item => item.id === parseInt(id));

  if (!item) {
    return (
      <div className="page-content">
        <h1>Item Not Found</h1>
        <p>The item you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/dashboard')} className="primary-btn">
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="page-content">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back
      </button>
      
      <div className="item-details-card">
        <h1>{item.name}</h1>
        <p className="item-description">{item.description}</p>
        
        <div className="details-grid">
          <div className="detail-item">
            <strong>Status:</strong>
            <span className={item.isCompleted ? "completed" : "not-completed"}>
              {item.isCompleted ? "✔️ Completed" : "❌ Not Completed"}
            </span>
          </div>
          
          <div className="detail-item">
            <strong>Priority:</strong>
            <span className={`priority-${item.priority}`}>
              {item.priority} {item.priority >= 4 ? "(High)" : item.priority >= 3 ? "(Medium)" : "(Low)"}
            </span>
          </div>
          
          <div className="detail-item">
            <strong>ID:</strong>
            <span>{item.id}</span>
          </div>
        </div>
        
        <div className="action-buttons">
          <button  onClick={() => navigate('/dashboard')} className="secondary-btn" > Back to List </button>
          <button  onClick={() => navigate(-1)} className="primary-btn"> Go Back </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;