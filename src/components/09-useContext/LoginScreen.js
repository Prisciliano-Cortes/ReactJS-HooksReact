import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // 1. Obtener la referencia del context user
    const { user } = useContext(UserContext);

    console.log(user);

    // 2. Obtener la referencia  del context setUser
    const { setUser } = useContext(UserContext);

    console.log(setUser);

    const newUser = {
        id: 12345,
        name: 'Prisciliano'
    }


    return (
        <div>
            <h1>LoginScreen</h1>
            <hr />
            <button 
                className='btn btn-primary btn-block'
                onClick={ () => setUser(newUser)}
            >
                Login
            </button>
        </div>
    )
}
