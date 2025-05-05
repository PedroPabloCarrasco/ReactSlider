import React from 'react';
import Slides from './Slides';

const images = [
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
];

function App() {
  return (
    <div className="App">
      <Slides images={images} />
    </div>
  );
}

export default App;
