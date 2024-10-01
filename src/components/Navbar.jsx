import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../components/firebase';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out");
      navigate('/Login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
        <NavLink 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
              to="/todo"
            >
              Todo
            </NavLink>
          <div className="navbar-links">
            <NavLink 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
              to="/counter"
            >
              Counter
            </NavLink>
            <NavLink 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} 
              to="/stop"
            >
              Stop-watch
            </NavLink>
            
           
           
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f8f9fa;
          padding: 10px 20px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .navbar-brand {
          font-size: 24px;
          color: #007bff;
          text-decoration: none;
        }
        .navbar-links {
          display: flex;
          align-items: center;
        }
        .nav-link {
          margin-right: 20px;
          font-size: 18px;
          color: #333;
          text-decoration: none;
        }
        .nav-link.active {
          color: #007bff;
        }
        .nav-link:hover {
          color: #007bff;
        }
        .logout-button {
          padding: 8px 16px;
          font-size: 16px;
          color: white;
          background-color: #007bff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .logout-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
