import React, { useEffect, useState , } from 'react'
import { getFetch } from "../../helpers/getFetch"
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const { categoriaId } = useParams()

    useEffect(()=>{
        if (categoriaId) {            
            getFetch()
            .then(resp => setProductos(resp.filter(producto => producto.categoria === categoriaId)))
            .catch( err => console.log(err))             
        } else {
            getFetch()
            .then(resp => setProductos(resp)) 
            .catch( err => console.log(err))                 
        }
        
    },[categoriaId])


    console.table(categoriaId)

  return (
    <ItemList productos={productos}/>
  )
}

export default ItemListContainer