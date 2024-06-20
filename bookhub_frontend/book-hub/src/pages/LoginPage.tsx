import React, { FormEvent, useRef } from 'react';
import './LoginPage.css'; // Import CSS for LoginPage styling

const LoginPage: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    // You can handle form submission logic here if needed
    console.log('Submitted:', email, password);

    // Clear input fields after submission (optional)
    if (emailRef.current && passwordRef.current) {
      emailRef.current.value = '';
      passwordRef.current.value = '';
    }
  };

  return (
    <div className="login-page">
      <h1>Welcome to MyBookHub!</h1>
      <p>Please log in to proceed</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} placeholder="example@gmail.com" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={passwordRef} placeholder="Enter your password" required />

        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        Don't have an account? <a href="/signup">Signup</a>
      </div>
    </div>
  );
};

export default LoginPage;
