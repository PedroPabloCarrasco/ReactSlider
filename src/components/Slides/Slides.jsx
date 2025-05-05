import React, { useState, useEffect } from 'react';

const Slides = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>{images[activeIndex].title}</h2>
      <img
        src={images[activeIndex].src}
        alt={images[activeIndex].title}
        style={{ width: '100%', maxWidth: '600px', borderRadius: '12px' }}
      />
    </div>
  );
};

export default Slides;
