import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMock } from '../helpers/mock';
import ItemList from './ItemList';
import remera from '../../assets/png/remera.jpg'
import BsSpinner from './BsSpinner';




const ItemListContainer = ({ greeting }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getMock
            .then(res => setData(res))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [])

    return (
        <div style={{ textAlign: 'center' }}>

            <h1>{greeting}</h1>
            {
                loading ? <BsSpinner /> : <ItemList productos={data} />
            }



        </div>
    )
};

export default ItemListContainer;
