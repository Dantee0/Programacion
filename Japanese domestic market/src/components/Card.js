// import React from 'react'

// export const Card = (props) => {
//   return (
//     <div>
//         <div className="card text-center d-flex flex-column" style={{ width: "25rem" }} center>
//             <img src={require(`../img/${props.imagen}`) } class="card-img-top" alt="..." style={{height:"400px", width: "400px"}}  />
//             <div class="card-body d-flex flex-column justify-content-end align-items-center">
//                 <h5 class="card-title">{props.titulo}</h5>
//                 <p class="card-text">{props.descripcion}</p>
//             </div>
//         </div>
//     </div>
//   )
//   }


import React from 'react';
import PropTypes from 'prop-types';

function Card({title, imageSource, text}) {
  return (
    <div className='card text-center bg-light animate__animated animate__faceInUp'>
      <div className='overflow'>
            <img src={imageSource} alt="" className='card-img-top'/>
        </div>
        <div className='card-body text-dark'>
            <h4 className='card-title fw-bold'>{title}</h4>
            <p className='card-text text-secondary'>
                {
                    text ? text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
                }
            </p>
        </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  text: PropTypes.string
}

export default Card