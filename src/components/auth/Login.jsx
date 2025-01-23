import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
      setError("Please fill in all fields.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) {
      return;
    }
    setLoading(true);

    try {
      // Send login request to the server
      const response = await fetch("/api/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log('testing: navigate to ok')

      const data = await response.json()
console.log(data)
console.log('testing: navigate to ok')

      if (!response.ok) {
        // Handle validation or authentication errors
        if (data.errors) {
          setError(data.errors.map((err) => err.msg).join(", "));
        } else {
          setError(data.error || "Login failed. Please try again.");
        }
        return;
      }
      // Simulate successful login
      console.log('testing: navigate to 1')

      login();
      alert("Login successful!");
      console.log('testing: navigate to 2')
      navigate("/home"); // Redirect to home/dashboard
      console.log('testing: navigate to home')
    } catch (err) {
      // Handle different types of errors
      if (err.name === "TypeError" && err.msg === "Failed to fetch") {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(err.msg || "An error occurred during login.");
      }
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };


  return (
    <>
      <div className="form-description">
        <h2 >Login</h2>
        {error && <p className="alert alert-danger">{error}</p>}
      </div>
      <div className="signup-container">
      <form onSubmit={handleSubmit}>
          <div className="form-group">
             <label htmlFor="email">
               email
             </label>
             <input
               type="text"
               id="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               required
              />
          </div>
          <div className="form-group">
            <label htmlFor="current-password">
              Password
            </label>
            <input
              type="password"
              id="current-password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="alert alert-danger">
          Don't have an account?{" "}
          <a href="/signup" >
            Sign up
          </a>
            </p>
        </form>
      </div>
    </>
  );
};

export default Login;