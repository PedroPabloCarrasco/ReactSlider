import React, { useState, useEffect } from 'react';

const Slides = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div style={styles.container}>
      <h2>{images[activeIndex].title}</h2>
      <div style={styles.slider}>
        <button onClick={prevSlide} style={styles.arrow}>←</button>
        <img
          src={images[activeIndex].src}
          alt={images[activeIndex].title}
          style={styles.image}
        />
        <button onClick={nextSlide} style={styles.arrow}>→</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  slider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
  },
  image: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '12px',
    objectFit: 'cover',
  },
  arrow: {
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    userSelect: 'none',
  },
};

export default Slides;
