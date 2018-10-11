import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, currentEmail, logout }) => {
  // debugger
  const display = currentUser ? (
    <div>
      <p>Hello, {currentEmail}</p>
      <button onClick={logout}>Log out</button>
    </div>

  ) : (
    <div>
      <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">TuneShack</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
