import React, { useState, useEffect } from 'react'

const EjReact = ({ initialValue }) => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    const url = 'https://rickandmortyapi.com/api/character'

    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(res => setData(res.results))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))

    }, [url])

    const changePj = (e) => {
        e.preventDefault()
        console.log(`${e.target.name}: ${e.target.value}`)
    }


    return (
        <div>
            {
                loading ? <h2>Cargando...</h2> :
                    <div>
                        <label htmlFor='personaje'>Personajes Rick and Morty</label>
                        <br />
                        <select
                            name="personaje"
                            disabled={(!Array.isArray(data) || data.length === 0) && 'disabled'}
                            onChange={changePj}
                        >
                            {
                                initialValue && loading ? <option>{initialValue.name}</option> :

                                    (Array.isArray(data) ?
                                        data.map(personaje => <option key={personaje.id} value={personaje.name}>{personaje.name}</option>)
                                        :
                                        <option>{data.name}</option>)
                            }
                        </select>
                    </div>
            }

        </div >
    )
}

export default EjReact
