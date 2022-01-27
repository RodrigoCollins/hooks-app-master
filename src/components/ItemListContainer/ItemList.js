import React from 'react'
import Item from './Item'


const ItemList = ({ products }) => {

    return (

        <div style={{ display: 'flex' }}>

            {
                products?.map((prod) => <Item key={prod.id} prod={prod} />)
            }

        </div>
    )
}

export default ItemList
