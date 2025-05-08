import React from 'react';

const PthaniSuits = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f9fa'
    }}>
      <div style={{
        padding: '40px',
        borderRadius: '10px',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        <h1 style={{ fontSize: '72px', margin: '0', color: '#dc3545' }}>404</h1>
        <h2 style={{ marginTop: '10px', color: '#333' }}>Page Not Found</h2>
        <p style={{ color: '#666' }}>Sorry, the page you are looking for does not exist.</p>
        <a href="/" style={{  textDecoration: 'none', color:"black" }}>Go Home</a>
      </div>
    </div>
  );
};

export default PthaniSuits;
