function UIGrid({ columns = 2, children }) {
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
  };

  return (
    <div className={`grid gap-4 ${columnClasses[columns] || columnClasses[2]}`}>
      {children}
    </div>
  );
}

export default UIGrid;