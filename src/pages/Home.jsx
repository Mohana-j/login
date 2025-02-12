import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // ✅ Ensure useNavigate is used

  return (
    <div className="home-container">
      <h1>Welcome to the Marks Portal</h1>
      <p>Click below to log in and enter your marks.</p>
      <button onClick={() => navigate("/login")}>Go to Login</button> {/* ✅ Correct way to navigate */}
    </div>
  );
};

export default Home;
