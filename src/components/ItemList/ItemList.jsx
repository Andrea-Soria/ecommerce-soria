
import React from 'react'
import Item from '../Item/Item'


const ItemList = ({productos}) => {
  return (
          <div style={{dispaly: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {productos?.map(producto => <Item key = {producto.id} producto = {producto}/>)}                                                                                                                                 
            </div>

  )
}

export default ItemList


