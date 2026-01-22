import React, { useRef } from "react";

function UncontrolledRegistrationForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entered value: " + inputRef.current.value);
  };

  return (
    <div>
      <h2>Uncontrolled Form</h2>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="Enter something" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledRegistrationForm;