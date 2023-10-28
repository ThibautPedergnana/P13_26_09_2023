import React, { useEffect, useState } from "react";
import { getAuthToken, login } from "../../services/apiService";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    if (getAuthToken()) {
      navigate("/profile");
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login({
        email: inputs.username,
        password: inputs.password,
      });
      navigate("/profile");
    } catch (err) {
      console.log("Email ou mot de passe incorrect");
      console.log(err);
    }
  };

  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label name="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={inputs.username || ""}
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label name="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={inputs.password || ""}
              onChange={handleChange}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label name="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </div>
  );
}

export default LoginForm;
