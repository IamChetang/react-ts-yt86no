import * as React from 'react';
import ForgotPassword from './ForgotPassword';
import SignUpPage from './SignUpPage';
import SignInPage from './SingInPage';
import './style.css';
import WelcomePage from './WelcomePage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/SignIn" element={<SignInPage />} />
          <Route path="/SignUp" element={<SignUpPage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          {/* <Route path='/verifyPasscode' element={<ForgotPassword  />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
