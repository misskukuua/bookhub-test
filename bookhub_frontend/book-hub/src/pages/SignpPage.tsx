// SignupPage.tsx

import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './SignupPage.css'; // Import CSS for SignupPage styling

const SignupPage: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    // You can handle form submission logic here if needed
    console.log('Submitted:', fullName, email, password);

    // Clear input fields after submission (optional)
    event.currentTarget.reset();
  };

  return (
    <div className="signup-page">
      <h1>Join MyBookHub!</h1>
      <p className="description">
        Be part of a global community of creators and create, all connected through <br /> the power of story.
      </p>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" placeholder='Fullname' required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='Email' required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder='Password' required />

        <button type="submit">Signup</button>
      </form>
      <div className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default SignupPage;
