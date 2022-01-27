import React from 'react'
import AppRouter from './AppRouter'
import { UserContext } from './UserContext'



const MainApp = () => {
    return (
        <div>       
           <UserContext.Provider>
                  <AppRouter/>
            </UserContext.Provider>
        </div>
    )
}

export default MainApp
