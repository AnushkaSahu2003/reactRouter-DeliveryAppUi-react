import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'white', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
            <div style={{ margin: '0 auto', width: '100%', maxWidth: '1280px', padding: '16px', paddingTop: '24px', paddingBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <div style={{ marginBottom: '24px' }}>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src="/public/logo.png"
                                style={{ marginRight: '12px', height: '64px' }}
                                alt="Company logo"
                            />
                        </Link>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '24px', justifyContent: 'space-between' }}>
                        <div>
                            <h2 style={{ marginBottom: '24px', fontSize: '12px', fontWeight: '600', color: '#111827', textTransform: 'uppercase' }}>Resources</h2>
                            <ul style={{ color: '#6b7280', fontWeight: '500' }}>
                                <li style={{ marginBottom: '16px' }}>
                                    <Link to="/" style={{ textDecoration: 'none', color: '#6b7280', transition: 'color 0.2s', display: 'inline-block' }}>Home</Link>
                                </li>
                                <li>
                                    <Link to="/about" style={{ textDecoration: 'none', color: '#6b7280', transition: 'color 0.2s', display: 'inline-block' }}>About</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 style={{ marginBottom: '24px', fontSize: '12px', fontWeight: '600', color: '#111827', textTransform: 'uppercase' }}>Follow us</h2>
                            <ul style={{ color: '#6b7280', fontWeight: '500' }}>
                                <li style={{ marginBottom: '16px' }}>
                                    <a
                                        href="https://www.instagram.com/"
                                        style={{ textDecoration: 'none', color: '#6b7280', transition: 'color 0.2s', display: 'inline-block' }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" style={{ textDecoration: 'none', color: '#6b7280', transition: 'color 0.2s', display: 'inline-block' }}>Facebook</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
