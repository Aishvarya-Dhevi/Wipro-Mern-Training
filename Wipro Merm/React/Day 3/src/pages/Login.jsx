import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

if (email === "admin@gmail.com" && password === "admin123") {
  navigate("/dashboard");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form className="p-4 shadow bg-white rounded" onSubmit={handleLogin}>
        <h3 className="text-center mb-3">Login</h3>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login; 
