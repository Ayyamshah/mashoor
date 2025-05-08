import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPopup = ({ onLogin }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!loggedIn) setShow(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [loggedIn]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(username))
      return setError("Please enter a valid Gmail address.");

    if (password.length < 6)
      return setError("Password must be at least 6 characters.");

    setError("");
    setLoggedIn(true);
    setShow(false);
    onLogin?.();
  };

  if (!show || loggedIn) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center"
      style={{ zIndex: 9999 }}
    >
      <Form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow"
        style={{ minWidth: '300px', maxWidth: '400px', width: '100%' }}
      >
        <h3 className="mb-4 text-center">Sign in</h3>
        {error && <div className="alert alert-danger p-2">{error}</div>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </Col>
            <Col xs="auto" className="d-flex align-items-center">
              <a href="#" style={{ fontSize: '0.9rem' }}>
                Forgot password
              </a>
            </Col>
          </Row>
        </Form.Group>

        <Button variant="dark" type="submit" className="w-100">
          Sign in
        </Button>

        <div className="text-center mt-3">
          <a href="#">Create account</a>
        </div>
      </Form>
    </div>
  );
};

export default LoginPopup;
