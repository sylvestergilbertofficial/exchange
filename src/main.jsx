import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
    <h1 style={{ color: '#10b981' }}>Bitfortrex is LIVE!</h1>
    <p>Deployed to <strong>bitfortrex.com</strong> via GitHub Pages</p>
    <button onClick={() => alert('Working!')} style={{
      padding: '0.5rem 1rem',
      background: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: '0.375rem',
      cursor: 'pointer'
    }}>
      Click Me
    </button>
  </div>
)
