import React, { useState, useEffect } from 'react';

const Slides = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(tick);
  }, [images.length]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.imageWrapper}>
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].title}
            style={styles.image}
          />
          <div style={styles.title}>{images[activeIndex].title}</div>
          <button style={styles.arrowLeft} onClick={goToPrev}>
            ‹
          </button>
          <button style={styles.arrowRight} onClick={goToNext}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

Slides.defaultProps = {
  images: [
    {
      src: 'https://images.pexels.com/photos/18821587/pexels-photo-18821587/free-photo-of-mujer-prado-en-pie-de-pie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Foto 1',
    },
    {
      src: 'https://images.pexels.com/photos/13726800/pexels-photo-13726800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Foto 2',
    },
    {
      src: 'https://images.pexels.com/photos/15676265/pexels-photo-15676265/free-photo-of-hojas-verde-flora-tropical.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Foto 3',
    },
  ],
};

//Estilos
const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `repeating-linear-gradient(
      45deg,
      #cceeff,
      #cceeff 20px,
      #ffffff 20px,
      #ffffff 40px
    )`,
    padding: '20px',
  },
  container: {
    textAlign: 'center',
    maxWidth: '800px',
  },
  imageWrapper: {
    position: 'relative',
    border: '5px solid #0077cc',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  title: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#ffffff',
    padding: '10px',
    fontSize: '18px',
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
    fontSize: '30px',
    color: '#ffffff',
    background: 'rgba(0,0,0,0.3)',
    border: 'none',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '50%',
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    fontSize: '30px',
    color: '#ffffff',
    background: 'rgba(0,0,0,0.3)',
    border: 'none',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '50%',
  },
};

export default Slides;
