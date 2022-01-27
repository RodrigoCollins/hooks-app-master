import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCss from './components/Navbar/NavbarCss';
import ItemListContainer2 from './components/ItemListContainer/ItemListContainer2';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Formulario from './components/Cart/Formulario';







const HooksApp = () => {

    return (
        <div className='hooks-app' >
            <BrowserRouter>
                <NavbarCss />
                <Routes>
                    <Route exact path='/' element={<ItemListContainer2 />} />
                    <Route exact path='/categoria' element={<ItemListContainer2 />} />
                    <Route exact path='/categoria/:categoriaId' element={<ItemListContainer2 />} />
                    <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer />} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/formulario' element={<Formulario />} />
                </Routes>
            </BrowserRouter>

        </div >
    )
}

export default HooksApp


