import React, { useState } from "react";

function ControlledRegistrationForm() {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Registered user: " + username);
    setUsername("");
  };

  return (
    <div>
      <h2>Controlled Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ControlledRegistrationForm;
