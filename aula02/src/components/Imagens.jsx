import React from 'react'
import imagem1 from '../assets/macaco_2.jpg'
import imagem2 from '../assets/macaco_1.jpg'

const Imagens = () => {
  return (
    <div>
        <img src={imagem1} alt="Imagem 1" />
        <img src="macaco_2.jpg" alt="Imagem 1" />
        <img src={imagem2} alt="Imagem 2" />
        <img src="macaco_1.jpg" alt="imagem 2" />
    </div>
  )
}

export default Imagens