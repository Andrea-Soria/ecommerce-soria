import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto = {}}) => {

  const [isCount, setIsCount] = useState(true)

  const onAdd = (count) => {
    alert('Compra total:' + count)
    setIsCount(false)
  }

  return (
    <div div className = 'div-item-detail-container'>
        <div className = 'div-image-container'>
            <img src = {producto.pictureUrl} alt = "producto" className = 'image-product'/>
        </div>
        <div className = 'div-key-product-info'>
            <div className = 'div-titles'>
                <h2> {producto.title} </h2>
                <h6> {producto.price} </h6>
            </div>
        </div>
        <div className="col">
                { isCount ? 
                        <ItemCount initial={1} stock={5} onAdd={onAdd} /> 
                    : 
                        <Link to='/cart'>
                            <button className="btn btn-outline-primary">Ir a Cart</button> 
                        </Link>
                }   
        </div>
      </div>

  )
}

export default ItemDetail