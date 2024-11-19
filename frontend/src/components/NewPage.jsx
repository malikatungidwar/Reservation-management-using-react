import React, { useState, useEffect } from "react";

const NewPage = () => {
  const [stockItems, setStockItems] = useState([
    { name: "Potato", quantity: 50, threshold: 20, eventThreshold: 30 },
    { name: "Onion", quantity: 30, threshold: 15, eventThreshold: 25 },
    { name: "Tomato", quantity: 25, threshold: 10, eventThreshold: 20 },
    { name: "Spices", quantity: 10, threshold: 5, eventThreshold: 10 },
    { name: "Garlic", quantity: 20, threshold: 8, eventThreshold: 15 },
    { name: "Pepper", quantity: 12, threshold: 5, eventThreshold: 10 },
    { name: "Ginger", quantity: 18, threshold: 6, eventThreshold: 12 },
    { name: "Rice", quantity: 100, threshold: 50, eventThreshold: 75 },
    { name: "Oil", quantity: 40, threshold: 15, eventThreshold: 30 },
  ]);

  const [quantities, setQuantities] = useState(
    stockItems.reduce((acc, item) => ({ ...acc, [item.name]: 0 }), {})
  );
  const [isEventDay, setIsEventDay] = useState(false);

  useEffect(() => {
    checkStockLevels();
  }, [stockItems, isEventDay]);

  const checkStockLevels = () => {
    stockItems.forEach((item) => {
      const activeThreshold = isEventDay ? item.eventThreshold : item.threshold;
      if (item.quantity < activeThreshold) {
        alert(`${item.name} needs to be restocked!`);
      }
    });
  };

  const updateStock = (itemName, amount) => {
    setStockItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName ? { ...item, quantity: Math.max(item.quantity - amount, 0) } : item
      )
    );
  };

  const restockItem = (itemName, amount) => {
    setStockItems((prevItems) =>
      prevItems.map((item) =>
        item.name === itemName ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  const handleQuantityChange = (itemName, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: value,
    }));
  };

  const handleEventDayChange = (e) => {
    setIsEventDay(e.target.checked);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Inventory Management</h1>
      <div style={styles.eventToggle}>
        <label style={styles.label}>
          <input
            type="checkbox"
            onChange={handleEventDayChange}
            checked={isEventDay}
          />
          Is today an event day?
        </label>
      </div>

      <table style={styles.stockTable}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Item</th>
            <th style={styles.tableHeader}>Quantity</th>
            <th style={styles.tableHeader}>Threshold</th>
            <th style={styles.tableHeader}>Update Quantity</th>
          </tr>
        </thead>
        <tbody>
          {stockItems.map((item) => (
            <tr key={item.name}>
              <td style={styles.tableCell}>{item.name}</td>
              <td style={styles.tableCell}>{item.quantity}</td>
              <td style={styles.tableCell}>
                {isEventDay ? item.eventThreshold : item.threshold}
              </td>
              <td style={styles.tableCell}>
                <input
                  type="number"
                  min="0"
                  value={quantities[item.name]}
                  onChange={(e) => handleQuantityChange(item.name, Number(e.target.value))}
                  placeholder="Enter amount"
                  style={styles.input}
                />
                <button
                  style={styles.button}
                  onClick={() => updateStock(item.name, quantities[item.name])}
                >
                  Use
                </button>
                <button
                  style={styles.button}
                  onClick={() => restockItem(item.name, quantities[item.name])}
                >
                  Restock
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={styles.header}>Stock Quantities</h2>
      <div style={styles.graphContainer}>
        {stockItems.map((item) => (
          <div key={item.name} style={styles.graphItem}>
            <span style={styles.graphLabel}>{item.name}:</span>
            <div style={{ ...styles.bar, width: `${item.quantity * 2}px` }}>
              <span style={styles.barText}>{item.quantity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#ffe5b4", // Pastel yellow background
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  eventToggle: {
    marginBottom: "20px",
    textAlign: "center",
  },
  label: {
    fontSize: "18px",
  },
  stockTable: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  tableHeader: {
    backgroundColor: "#3498db",
    color: "white",
    padding: "12px",
  },
  tableCell: {
    padding: "12px",
    border: "1px solid #ddd",
  },
  input: {
    width: "80px",
    padding: "5px",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "5px 10px",
    marginLeft: "5px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#2980b9",
  },
  graphContainer: {
    marginTop: "20px",
  },
  graphItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },
  graphLabel: {
    width: "100px",
    fontWeight: "bold",
    fontSize: "16px",
    textAlign: "right",
    marginRight: "10px",
  },
  bar: {
    height: "30px",
    backgroundColor: "#3498db",
    borderRadius: "15px",
    position: "relative",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "width 0.3s ease",
  },
  barText: {
    position: "absolute",
    left: "10px",
    color: "white",
    fontWeight: "bold",
  },
};

export default NewPage;
