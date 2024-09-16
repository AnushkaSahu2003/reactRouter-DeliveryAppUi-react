import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ margin: '0 auto', width: '100%', maxWidth: '80rem' }}>
      <aside
        style={{
          position: 'relative',
          overflow: 'hidden',
          color: 'black',
          borderRadius: '0.5rem',
          margin: '0 0.5rem',
          padding: '4rem 0',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: '10',
            maxWidth: '100vw',
            padding: '2.5rem 1rem',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              maxWidth: '32rem',
              marginTop: '0rem',
              textAlign: 'center',
              marginLeft: 'auto',
              spaceY: '15rem',
            }}
          >
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', lineHeight: '1.25' }}>
              Download Now
              <span style={{ display: 'none', fontSize: '2.5rem', display: 'block' }}>For free</span>
            </h2>

            <Link
              to="/"
              style={{
                display: 'inline-flex',
                color: 'white',
                alignItems: 'center',
                padding: '0.7rem 1.5rem',
                fontWeight: '500',
                backgroundColor: '#c2410c',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                opacity: '1',
                transition: 'opacity 0.3s',
              }}
              onMouseOver={(e) => (e.target.style.opacity = '0.75')}
              onMouseOut={(e) => (e.target.style.opacity = '1')}
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '-10%',
            width: '100%',
            height: '100%',
            marginTop: '0rem',
          }}
        >
          <img
            style={{ width: '28rem', objectFit: 'contain' }}
            src="/public/home.png"
            alt="image1"
          />
        </div>
      </aside>

      <div style={{ display: 'grid', placeItems: 'center', marginTop: '5rem' }}>
        <img style={{ width: '30rem', objectFit: 'contain' }} src="/public/home2.png" alt="image2" />
      </div>

      <h1 style={{ textAlign: 'center', fontSize: '2rem', padding: '2.5rem 0', fontWeight: '500' }}>FAST DELIVERY</h1>
    </div>
  );
}
