import { useState } from "react";

export default function Inventory() {
  const [stock, setStock] = useState(0);

  return (
    <div className="card">
      <h2 className="title">Inventory Dashboard</h2>
      <p className="subtitle">Manager Control Panel</p>

      <div className="stock-box">
        <p>Current Stock</p>
        <h1>{stock}</h1>
      </div>

      <div className="button-row">
        <button className="add-btn" onClick={() => setStock(stock + 1)}>
          + Add Stock
        </button>

        <button
          className="remove-btn"
          onClick={() => setStock(stock - 1)}
          disabled={stock === 0}
        >
          − Remove Stock
        </button>
      </div>

      <p className="note">Stock cannot go below zero</p>
    </div>
  );
}