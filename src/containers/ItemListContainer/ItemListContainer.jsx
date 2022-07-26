import React from 'react'

import { useEffect, useState } from "react"




const ItemListContainer = () => {       
        
    const [productos, setProductos] = useState([])
   
    
     const getFecht = async () => {
        try {
            const resp = await fetch('/assets/Json/DATA.json')
            const dataParse = await resp.json()
            setProductos(dataParse)
        } catch (error) {
            console.log(error)
        }
     }

     useEffect (() => {
         getFecht()
     }, [])
                 
     console.table(productos)

    
    return (
            <div>
                 {productos.map(producto => <div>{producto.title}</div>)}
            </div>
    )
                
    }
    
    export default ItemListContainer