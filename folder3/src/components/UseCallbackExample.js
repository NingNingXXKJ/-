import React, { useState, useCallback, useEffect } from 'react';


const ExpensiveComponent = React.memo(({ onItemClick, itemId }) => {

  useEffect(() => {
    console.log(`ExpensiveComponent ${itemId} rendered`);
  });

  return (
    <div>
      <button 
        className="button"
        onClick={() => onItemClick(itemId)}
      >
        Item {itemId}
      </button>
    </div>
  );
});
