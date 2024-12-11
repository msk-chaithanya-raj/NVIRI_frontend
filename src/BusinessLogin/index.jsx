import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function BusinessLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    businessName: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    businessName: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "", businessName: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else if (!/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one special character";
      isValid = false;
    }

    if (!formData.businessName) {
      newErrors.businessName = "Business name is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Display success or redirect (client-side only)
    alert("Biz Login successful!");
  };

  return (
    <div className="login-container" id="bizlogin">
      <div className="login-box">
        <div className="login-header">
          <Link to="/" className="login-logo">
            argon
          </Link>
          <h2>Sign in to your business account</h2>
          <p>
            Or{" "}
            <Link to="/login" className="business-login-link">
              sign in as a user
            </Link>
          </p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="businessName">Business name</label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              className={`form-input ${
                errors.businessName ? "error-input" : ""
              }`}
              placeholder="Business name"
              value={formData.businessName}
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
            />
            {errors.businessName && (
              <p className="error-text">{errors.businessName}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              className={`form-input ${errors.email ? "error-input" : ""}`}
              placeholder="Email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className={`form-input ${errors.password ? "error-input" : ""}`}
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="forgot-password">
              <a href="#bizlogin">Forgot your password?</a>
            </div>
          </div>

          <button type="submit" className="submit-button">
            Sign in as Business
          </button>
        </form>
      </div>
    </div>
  );
}

export default BusinessLogin;
