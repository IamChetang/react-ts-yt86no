import * as React from 'react';

export default function WelcomePage() {
  return (
    <div className="welcome_container">
      <div className="heading">
        <h1>Welcome</h1>
        <p>Let's get started</p>
      </div>
      <div className="content">
        <p>Existing customer / Get started</p>
        <button className="btn">Sign in</button>
        <p>
          New customer? <span>Create a new account</span>
        </p>
      </div>
    </div>
  );
}
