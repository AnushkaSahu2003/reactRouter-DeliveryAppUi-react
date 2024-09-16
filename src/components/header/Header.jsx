import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', position: 'sticky', top: '0', zIndex: '50' }}>
      <nav style={{ backgroundColor: 'white', borderColor: '#D1D5DB', padding: '0.625rem 1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '100vw', margin: '0 auto' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/public/logo.png"
              style={{ marginRight: '0.75rem', height: '3rem' }}
              alt="Logo"
            />
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', order: '2' }}>
            <Link
              to="#"
              style={{
                color: '#1F2937',
                padding: '0.5rem 1.25rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                backgroundColor: 'transparent',
                textDecoration: 'none',
                marginRight: '0.5rem',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#F9FAFB')}
              onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              Log in
            </Link>
            <Link
              to="#"
              style={{
                color: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                backgroundColor: '#EA580C',
                textDecoration: 'none',
                marginRight: '0.5rem',
                transition: 'background-color 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#C2410C')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#EA580C')}
            >
              Get started
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1, order: '1' }}>
            <ul style={{ display: 'flex', margin: 0, padding: 0, listStyleType: 'none', gap: '2rem', fontSize: '1rem' }}>
              {['/', '/about', '/github'].map((path, index) => (
                <li key={index}>
                  <NavLink
                    to={path}
                    style={({ isActive }) => ({
                      display: 'block',
                      padding: '0.5rem 0.75rem',
                      transition: 'color 0.2s',
                      color: isActive ? '#EA580C' : '#4B5563',
                      textDecoration: 'none',
                    })}
                    onMouseOver={(e) => (e.target.style.color = '#EA580C')}
                    onMouseOut={({ isActive, target }) => (target.style.color = isActive ? '#EA580C' : '#4B5563')}
                  >
                    {['Home', 'About', 'Instagram'][index]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
