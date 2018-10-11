import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
  // debugger
  const display = currentUser.id !== null ? (
    <div>
      <p>Hello, {currentUser.email}</p>
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
