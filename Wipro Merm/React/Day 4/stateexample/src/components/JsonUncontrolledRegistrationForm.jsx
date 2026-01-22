import React, { useRef } from "react";

function JsonUncontrolledRegistrationForm() {
  const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Value: " + usernameRef.current.value);
  };

  return (
    <div>
      <h2>Uncontrolled Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input ref={usernameRef} placeholder="Username" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default JsonUncontrolledRegistrationForm;