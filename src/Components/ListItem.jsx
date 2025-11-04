import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function ListItem({ item, onDelete, onUpdate }) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(item.name);
  const [editDescription, setEditDescription] = useState(item.description);
  const [editPriority, setEditPriority] = useState(item.priority.toString());
  const [editIsCompleted, setEditIsCompleted] = useState(item.isCompleted);

  const handleItemClick = () => {
    if (!isEditing) {
      navigate(`/item/${item.id}`);
    }
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.stopPropagation();
    onUpdate({
      ...item,
      name: editName.trim(),
      description: editDescription.trim(),
      priority: parseInt(editPriority),
      isCompleted: editIsCompleted
    });
    setIsEditing(false);
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setEditName(item.name);
    setEditDescription(item.description);
    setEditPriority(item.priority.toString());
    setEditIsCompleted(item.isCompleted);
    setIsEditing(false);
  };

//Render normal
const renderCompletionStatus = () => {
  return item.isCompleted ? "✅ Order Ready" : "🔄 Preparing";
};

const renderPriority = () => {
  if (item.priority >= 4) {
    return <span style={{ color: 'red', fontWeight: 'bold' }}>Rush Order</span>;
  } else if (item.priority >= 3) {
    return <span style={{ color: 'orange' }}>High Priority</span>;
  } else {
    return <span style={{ color: 'green' }}>Standard</span>;
  }
};


<div className="item-content" onClick={handleItemClick}>
  <div className="customer-name">For: {item.customer}</div>
  <h3>{item.name}</h3>
  <p>{item.description}</p>
  <div className="item-details">
    <span className="status">{renderCompletionStatus()}</span>
    <span className="priority">{renderPriority()}</span>
    <span className={`coffee-type type-${item.type.toLowerCase()}`}>
      {item.type}
    </span>
    <span className="priority-level">Priority: {item.priority}</span>
  </div>
</div>


  if (isEditing) {
    return (
      <div className="list-item editing">
        <div className="item-content">
          <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} className="edit-input" onClick={(e) => e.stopPropagation()}
          />
          <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} className="edit-textarea" onClick={(e) => e.stopPropagation()} rows="2"
          />
          <div className="item-details">
            <label className="edit-checkbox">
              <input type="checkbox" checked={editIsCompleted} onChange={(e) => setEditIsCompleted(e.target.checked)}
              />
              Completed
            </label>
            <select value={editPriority} onChange={(e) => setEditPriority(e.target.value)} className="edit-select" >
              <option value="1">Low (1)</option>
              <option value="2">Medium-Low (2)</option>
              <option value="3">Medium (3)</option>
              <option value="4">High (4)</option>
              <option value="5">Critical (5)</option>
            </select>
          </div>
        </div>
        <div className="item-actions">
          <button className="save-btn" onClick={handleSave}> Save </button>
          <button className="cancel-btn" onClick={handleCancel}> Cancel </button>
          <button  className="delete-btn" onClick={(e) => { 
            e.stopPropagation(); 
            onDelete(item.id);
            }} 
            >
            Delete
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="list-item">
      <div className="item-content" onClick={handleItemClick}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="item-details">
          <span className="status">{renderCompletionStatus()}</span>
          <span className="priority">{renderPriority()}</span>
          <span className="priority-level">Priority Level: {item.priority}</span>
        </div>
      </div>
      <div className="item-actions">
        <button className="edit-btn" onClick={handleEdit}> Edit </button>
        <button className="delete-btn" onClick={(e) => {
            e.stopPropagation();
            onDelete(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListItem;