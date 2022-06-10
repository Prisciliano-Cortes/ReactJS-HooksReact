import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../helpers/ProcesoPesado';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter( 500 );
    const [show, setShow] = useState(false);

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small> { counter } </small> </h3>
            <hr />

            <p> { memoProcesoPesado } </p>
            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => {
                    setShow( !show )
                }}
            >
                show/hidden { JSON.stringify( show ) }
            </button>
        </div>
    )
}