import React from "react";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RegistrationForm />
    </div>
  );
}

export default App;
