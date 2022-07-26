import React from 'react'

const Item = ({ item }) => {
    const {title, description, price, pictureUrl} = item

  return (
    
    <div className="card" style={{ width: '18rem', margin: 20, padding: 5 }}>
    <img src= {pictureUrl} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p class="card-text">{description}</p>
      <p class="card-text"> $ {price}</p>
      <button type='button' className="btn btn-dark">Ver Detalle</button>
    </div>
  </div>

  )
}

export default Item