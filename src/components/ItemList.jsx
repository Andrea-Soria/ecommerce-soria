import React from 'react'
import Item from './Item'


const ItemList = ({items}) => {
        return (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
              {items.map(item => <Item item={item} key={item.id} /> )}
          </div>
        )
}

export default ItemList