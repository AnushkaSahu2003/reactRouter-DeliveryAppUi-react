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
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div style={{ flex: '7 1 0', width: '100%' }}>
            <h2 style={{ fontSize: '2rem', color: '#111827', fontWeight: 'bold', lineHeight: '1.25' }}>
              React development is carried out by passionate developers
            </h2>
            <p style={{ marginTop: '1.5rem', color: '#4B5563' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium
              nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat
              expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p style={{ marginTop: '1rem', color: '#4B5563' }}>
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo
              possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
