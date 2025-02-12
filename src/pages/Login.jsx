import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

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

const Login = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false); // Tracks login status

  // Handle login logic
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      setSubmitted(true); // Update the login status
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      {!submitted ? (
        <div className="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [marks, setMarks] = useState({
    Math: "",
    Science: "",
    English: "",
    History: "",
    Computer: "",
  });

  const handleChange = (e) => {
    setMarks({ ...marks, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Marks saved successfully!");
  };

  return (
    <div className="dashboard-container">
      <h2>Enter Your Marks</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(marks).map((subject) => (
          <div key={subject} className="marks-input">
            <input
              type="number"
              name={subject}
              value={marks[subject]}
              onChange={handleChange}
              placeholder={subject}
              required
            />
          </div>
        ))}
        <button type="submit" className="save-marks">Save Marks</button>
      </form>
      <div>
        <h3>Your Marks</h3>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(marks).map(([subject, mark]) => (
              <tr key={subject}>
                <td>{subject}</td>
                <td>{mark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Login;
