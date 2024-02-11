
import React, { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
  };

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginPage  ;
