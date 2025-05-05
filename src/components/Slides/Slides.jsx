import React from 'react'
import { useState, useEffect } from 'react'

const Slides = ({images}) => {

    const [ activeIndex, setActiveIndex] = useState(0);
    useEffect( () => {
        
    })

    return (
        <div>
           <div>
            <img src="https://images.pexels.com/photos/31768850/pexels-photo-31768850/free-photo-of-mujer-encantadora-en-un-exuberante-jardin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img src="" alt="https://images.pexels.com/photos/18821587/pexels-photo-18821587/free-photo-of-mujer-prado-en-pie-de-pie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <img src="" alt="https://images.pexels.com/photos/15676265/pexels-photo-15676265/free-photo-of-hojas-verde-flora-tropical.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <img src="" alt="https://images.pexels.com/photos/13726800/pexels-photo-13726800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <div>Titulo</div>
           </div>
        </div>
    )
}

Slides.defaultProps = {
    images: [
        {
            src: '',
            title: '',

        }
    ]

}

export default Slides