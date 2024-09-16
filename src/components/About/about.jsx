import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '4rem 0', backgroundColor: 'white' }}>
      <div
        style={{
          margin: 'auto',
          padding: '0 1.5rem',
          color: '#4B5563',
          maxWidth: '1140px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'center',
          }}
        >
          <div style={{ flex: '5 1 0', width: '100%' }}>
            <img
              src="/public/about.png"
              alt="image"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div style={{ flex: '7 1 0', width: '100%' }}>
            <h2 style={{ fontSize: '2rem', color: '#111827', fontWeight: 'bold', lineHeight: '1.25' }}>
            "Speed meets reliability – delivering your packages faster, every time!"
            </h2>
            <p style={{ marginTop: '1.5rem', color: '#4B5563' }}>
            "At our fast courier service, we prioritize speed and reliability. From urgent deliveries to scheduled shipments, we ensure your packages arrive quickly and safely. With real-time tracking and dedicated support, trust us to deliver on time, every time."
            </p>
       
          </div>
        </div>
      </div>
    </div>
  );
}
