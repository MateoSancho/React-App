import { useState, useEffect } from 'react';
import List from '../Components/List.jsx';
import AddItemForm from '../Components/AddItemForm.jsx';
import coffeeOrdersData from '../data/CoffeeOrdersData.js';

//Algunas ayuda para lo de Json files son de IA(no entendiamos mucho al inicio)
function Dashboard() {  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem('coffeeOrders');
    if (savedItems && JSON.parse(savedItems).length > 0) {
      setItems(JSON.parse(savedItems));
    } else {
      //Si no hay datos en localStorage o está vacío, usa los datos de ejemplo
      setItems(coffeeOrdersData);
      localStorage.setItem('coffeeOrders', JSON.stringify(coffeeOrdersData));
    }
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem('coffeeOrders', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (newItem) => {
    const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
    const newItemWithId = {
      ...newItem,
      id: newId,
      orderTime: new Date().toLocaleString()
    };
    setItems([...items, newItemWithId]);
  };

  const updateItem = (updatedItem) => {
    setItems(items.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearAllOrders = () => {
    if (window.confirm('Are you sure you want to clear all orders?')) {
      setItems(coffeeOrdersData); //En lugar de vacío, vuelve a datos de ejemplo
    }
  };

  const pendingOrders = items.filter(item => !item.isCompleted).length;
  const completedOrders = items.filter(item => item.isCompleted).length;

  return (
    <div className="page-content">
      <div className="dashboard-header">
        <div>
          <h1>☕ Coffee Shop Dashboard</h1>
          <p>Manage coffee orders and track preparation status</p>
          <div className="order-stats">
            <span className="stat pending">Pending: {pendingOrders}</span>
            <span className="stat completed">Completed: {completedOrders}</span>
            <span className="stat total">Total: {items.length}</span>
          </div>
        </div>
        {items.length > 0 && (
          <button className="secondary-btn" onClick={clearAllOrders}>
            Reset to Sample Orders
          </button>
        )}
      </div>
      
      <AddItemForm onAddItem={addItem} />
      <List 
        items={items} 
        onDeleteItem={deleteItem}
        onUpdateItem={updateItem}
      />
    </div>
  );
}

export default Dashboard