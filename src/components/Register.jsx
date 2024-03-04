import React, { useState, useEffect } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/v1/auth/csrf-token/");
        setCsrfToken(response.data.csrfToken);
        console.log(response.data.csrfToken)
      } catch (error) {
        console.error("Failed to fetch CSRF token:", error);
      }
    };
    fetchCsrfToken();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var form_data = new FormData();
    for ( var key in formData ) {
        form_data.append(key, formData[key]);
    }
    try {
    
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/auth/register/",
        form_data,
        {
          headers: {
            "X-CSRFToken": csrfToken,
          },
        }
      );

      console.log(response.data); 
    } catch (error) {
      console.error(error.response.data); 
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-col justify-center max-w-screen-md"
    >
      <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="input-field"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input-field"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="input-field"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit" className="bg-red-500">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
