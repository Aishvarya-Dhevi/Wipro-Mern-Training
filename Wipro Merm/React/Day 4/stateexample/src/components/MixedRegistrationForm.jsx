import React, { useRef, useState } from "react";

function MixedRegistrationForm() {
  const emailRef = useRef();
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Email: " + emailRef.current.value + "\nPassword: " + password
    );
  };

  return (
    <div>
      <h2>Mixed Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} placeholder="Email" />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MixedRegistrationForm;