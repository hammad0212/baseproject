import React from 'react';
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className="home-container">
      <h3>HELLO FROM HOME PAGE</h3>
      <p>Welcome to the Home Page. This is your starting point.</p>
      
      <style jsx>{`
        .home-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #f0f8ff;
          text-align: center;
          padding: 20px;
        }
        h3 {
          color: #333;
          margin-bottom: 20px;
          font-size: 24px;
        }
        p {
          color: #555;
          margin-bottom: 30px;
          font-size: 18px;
        }
        .home-button {
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          background-color: #007bff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .home-button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
}
