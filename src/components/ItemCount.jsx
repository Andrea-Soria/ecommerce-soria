import React, { useState } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState (initial)
    
    const suma = () => {
        if (count < stock){
            setCount (count + 1)
        } else{
            alert ('Sin stock')
        }
    }

    const resta = () => {
        if (count > initial){
            setCount (count - 1)
        } else {
            alert ('Compra minima')
        }
    }

    const reset = () => { 
        setCount(initial) 
    }
 
    return (
    <div style={{ marginTop: 200 , background: 'black' , color: 'white' }}>
        <h1>{count}</h1>
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>
        <button onClick={() => onAdd (count)}>Agregar al Carrito</button>
        <button onClick={reset}>Vaciar</button>
    </div>
  )
}


export default ItemCount