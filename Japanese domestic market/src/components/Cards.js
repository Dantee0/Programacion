import React from 'react';
import Card from './Card';
import './cards.css';
import nissan from '../img/nissan.jpg'
import racing from '../img/racing.jpg'
import byn from '../img/byn.jpg'
import tunel from '../img/tunel.jpg'
// import cat from '../img/cat.jpg'
import yellowcar from '../img/racing2.jpg'
import creators from '../img/creadores.webp'

const cards = [
    {
        id: 1,
        title: 'Sobre JDM Zone',
        image: nissan,
        text: 'Marketplace especializado en automóviles de origen japonés.',
    },
    {
        id: 2,
        title: '¿Por qué lo elegimos?',
        image: racing,
        text: 'Para crear una comunidad de entusiastas de automóviles japoneses.',
        // Para crear una comunidad de entusiastas de automóviles japoneses que compartan información, experiencias y conocimientos sobre el mantenimiento y la personalización de estos vehículos.
    },
    {
        id: 3,
        title: '¿Cuál es nuestro objetivo?',
        image: byn,
        text: 'Ofrecer una plataforma con amplia selección al público.',
        // Ofrecer una amplia selección para que los compradores puedan encontrar el modelo, la marca y el año que desean. Proporcionar a los vendedores una plataforma para publicar y vender a una audiencia global interesada.
    },
    {
        id: 4,
        title: '¿Qué lenguajes vamos a utilizar?',
        image: tunel,
        text: 'HTML, CSS, Python, JavaScript, entre otros.',
    },
    {
        id: 5,
        title: 'Sobre nosotros',
        image: creators,
        text: 'Aldana Moreno y Dante Illesca.',
    },
    {
        id: 6,
        title: '¿Cómo contactarnos?',
        image: yellowcar,
        text: 'Por correo electrónico, redes sociales o teléfono.'
    }
]

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
            {
                cards.map(card => (
                    <div className="col-md-4" key={card.id}>
                    <Card title={card.title} imageSource={card.image} text={card.text}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards
