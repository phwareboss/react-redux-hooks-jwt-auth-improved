import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
const MyPassword = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Change My Password
        </h3>
      </header>
    </div>
  );
};
export default MyPassword;