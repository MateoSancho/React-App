import { useState } from 'react';

function AddItemForm({ onAddItem }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('3');
  const [isCompleted, setIsCompleted] = useState(false);
  const [customer, setCustomer] = useState('');
  const [type, setType] = useState('Hot');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !customer.trim()) return;
    
    onAddItem({
      name: name.trim(),
      description: description.trim(),
      priority: parseInt(priority),
      isCompleted: isCompleted,
      customer: customer.trim(),
      type: type
    });
    
    // Reset form
    setName('');
    setDescription('');
    setPriority('3');
    setIsCompleted(false);
    setCustomer('');
    setType('Hot');
    setIsFormVisible(false);
  };

  if (!isFormVisible) {
    return (
      <div className="form-container" style={{ marginBottom: '2rem' }}>
        <button  className="primary-btn" onClick={() => setIsFormVisible(true)} >+ Add New Order </button>
      </div>
    );
  }

  return (
    <div className="form-container" style={{ marginBottom: '2rem' }}>
      <div className="form-card">
        <h3>Add New Coffee Order</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="customer">Customer Name *</label>
            <input type="text" id="customer" value={customer} onChange={(e) => setCustomer(e.target.value)} required placeholder="Enter customer name" />
          </div>

          <div className="form-group">
            <label htmlFor="name">Drink Name *</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter drink name" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Special Instructions</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter special instructions or modifications" rows="3" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="type">Drink Type</label>
              <select id="type" value={type} onChange={(e) => setType(e.target.value)} >
                <option value="Hot">Hot</option>
                <option value="Iced">Iced</option>
                <option value="Blended">Blended</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} >
                <option value="1">Low (1)</option>
                <option value="2">Medium-Low (2)</option>
                <option value="3">Medium (3)</option>
                <option value="4">High (4)</option>
                <option value="5">Rush (5)</option>
              </select>
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.target.checked)} />
                Order Ready
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-btn">
              Add Order
            </button>
            <button  type="button"  className="secondary-btn" onClick={() => setIsFormVisible(false)} >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItemForm;