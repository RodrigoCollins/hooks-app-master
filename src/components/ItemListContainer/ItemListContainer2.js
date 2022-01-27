import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMock } from '../helpers/mock'
import BsSpinner from './BsSpinner'
import ItemList from './ItemList'


const ItemListContainer2 = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        if (categoriaId) {
            getMock
                .then(res => setProducts(res.filter(prod => prod.categoria === categoriaId)))
                .finally(() => setLoading(false))
        } else {
            getMock
                .then(res => setProducts(res))
                .finally(() => setLoading(false))
        }

    }, [categoriaId])

    console.log(products)


    return (
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>

            {
                loading ? <BsSpinner /> : <ItemList products={products} />
            }

        </div>
    )
}

export default ItemListContainer2
