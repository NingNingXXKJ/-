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
