import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();

    const hadleClick = () => {
        
        //document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />

            <input 
                ref={ inputRef }
                className='form-control'
                placeholder='Su nombre'
            />
            <button
                className='btn btn-outline-primary mt-5'
                onClick={ hadleClick }
            >
                Focus
            </button>
        </div>
    )
}
