import React from 'react'
import { Link } from "react-router-dom"


const Item = ({producto}) => {
  return (
              <div
                    key = {producto.id}
                    className = 'col-md-4 p-1'
                >
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                    {`${producto.title} - ${producto.description}`}
                    </div>
                
                  <div className="card-body">
                    <center>
                      <img src={producto.pictureUrl} alt='' className='w-50' />
                    </center>
                    <label > Precio: {producto.price}</label>
                  </div>
                
                  <div className="card-footer"> 
                    <Link to={`/id/${producto.id}`}>
                      <button className="btn btn-outline-primary btn-block">
                        detalle del producto
                      </button> 
                    </Link>
                  </div>  
                </div>
              </div>
  )
}

export default Item