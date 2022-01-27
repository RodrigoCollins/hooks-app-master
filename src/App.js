import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBarBs from './components/Navbar/NavbarBs';

const App = () => {

    const saludo = 'Bienvenidos a mi Ecommerce!'

    return (
        <div>
            <NavBarBs />
            <ItemListContainer greeting={saludo} />

        </div>
    );
};

export default App;
