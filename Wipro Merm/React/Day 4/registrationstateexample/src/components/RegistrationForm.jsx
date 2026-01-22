import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function RegistrationForm() {
  // Uncontrolled inputs
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // Controlled states
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Read values only on submit
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let newErrors = {};

    // First & Last name validation
    const nameRegex = /^[A-Za-z]+$/;
    if (!firstName) newErrors.firstName = "First name is required";
    else if (!nameRegex.test(firstName))
      newErrors.firstName = "Only alphabets allowed";

    if (!lastName) newErrors.lastName = "Last name is required";
    else if (!nameRegex.test(lastName))
      newErrors.lastName = "Only alphabets allowed";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) newErrors.email = "Email is required";
    else if (!emailRegex.test(email))
      newErrors.email = "Invalid email format";

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!password) newErrors.password = "Password is required";
    else if (!passwordRegex.test(password))
      newErrors.password =
        "Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special character";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStatus("Registration Successful");
    } else {
      setStatus("");
    }
  };

  return (
    <div
  className="d-flex justify-content-center align-items-center"
  style={{ minHeight: "100vh" }}>
      <div className="card p-4" style={{ width: "400px" }}>
        <h3>User Registration Form</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="First Name"
            ref={firstNameRef}
          />
          {errors.firstName && (
            <small className="text-danger">{errors.firstName}</small>
          )}

          <input
            type="text"
            className="form-control mt-3"
            placeholder="Last Name"
            ref={lastNameRef}
          />
          {errors.lastName && (
            <small className="text-danger">{errors.lastName}</small>
          )}

          <input
            type="email"
            className="form-control mt-3"
            placeholder="Email"
            ref={emailRef}
          />
          {errors.email && (
            <small className="text-danger">{errors.email}</small>
          )}

          <input
            type="password"
            className="form-control mt-3"
            placeholder="Password"
            ref={passwordRef}
          />
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}

          <button className="btn btn-primary mt-4" type="submit">
            Register
          </button>
        </form>

        {status && <p className="text-success mt-3">{status}</p>}
      </div>
    </div>
  );
}

export default RegistrationForm;
