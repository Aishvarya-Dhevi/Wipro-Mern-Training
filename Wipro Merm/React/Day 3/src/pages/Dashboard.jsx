import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="dashboard-wrapper">
        
<div className="dashboard-page">
  <div className="card">
    <h2 className="title">Inventory</h2>
    <p className="subtitle">Manage stock details</p>
    <button className="add-btn" onClick={() => navigate("/inventory")}>
      Go to Inventory
    </button>
  </div>

  <div className="card">
    <h2 className="title">Employees</h2>
    <p className="subtitle">View employee list</p>
    <button className="promote-btn" onClick={() => navigate("/employees")}>
      Go to Employees
    </button>
  </div>
</div>

      </div>
    </div>
  );
}

export default Dashboard;