import React from 'react';

// eslint-disable-next-line no-unused-vars
const withAuth = (WrappedComponent) => {
  return function AuthComponent(props) {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";

    if (!isLoggedIn) {
      return <h3 style={{ color: "red" }}>You are not Authorized..</h3>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;