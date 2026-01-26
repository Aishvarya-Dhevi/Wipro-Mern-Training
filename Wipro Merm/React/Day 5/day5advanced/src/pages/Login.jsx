import React from 'react';

function Login() {
  const login = () => {
    localStorage.setItem("loggedIn", "true"); // store as string
    alert("Login Successful");
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    alert("Logged Out");
  };

  return (
    <div>
      <button onClick={login}>Login Here!</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Login;