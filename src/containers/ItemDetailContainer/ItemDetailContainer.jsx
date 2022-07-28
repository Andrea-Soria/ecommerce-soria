import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { getFetch } from '../../helpers/getFetch'

const ItemDetailContainer = () => {
  
    const [ producto, setProducto ] =  useState({})
    const { productId } = useParams()

    useEffect( ()=> {
        getFetch(productId)
        .then( data => setProducto(data) )
    }, [productId])
    
    return ( 
        <div>            
            <ItemDetail producto={producto} />            
        </div>
    )

}

export default ItemDetailContainer