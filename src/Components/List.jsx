import ListItem from './ListItem';

function List({ items, onDeleteItem, onUpdateItem }) {
  const completedCount = items.filter(item => item.isCompleted).length;
  const totalCount = items.length;

  return (
    <div className="list-container">
      <div className="list-header">
        <h2>Task List</h2>
        <p>
          {completedCount} of {totalCount} tasks completed
          ({totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0}%)
        </p>
      </div>
      
      {items.length === 0 ? (
        <p className="empty-message">No items in the list. Add some tasks!</p>
      ) : (
        <div className="list">
          {items.map(item => (
            <ListItem 
              key={item.id} 
              item={item} 
              onDelete={onDeleteItem}
              onUpdate={onUpdateItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default List;