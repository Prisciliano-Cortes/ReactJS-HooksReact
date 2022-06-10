import React, { useEffect, useState } from 'react';

export const Message = () => {

    const [coords, setCoords] = useState({
        x:0,
        y:0
    });

    const {x, y } = coords;


    useEffect(() => {
        console.log('Componente montado');

        const MouseMove = (e) => {
            const coords = {x: e.x, y: e.y}
            // console.log(coor)
            //console.log(' :D ');
            setCoords(coords);
        }

        window.addEventListener('mousemove', MouseMove );
        
        return () => {
            console.log('Componente desmontado');
            window.removeEventListener('mousemove', MouseMove);
        }
    }, [])
    
    return (
        <div>
            <h3>Eres genial!</h3>
            <p>x { x } </p>
            <p>y { y } </p>
        </div>
    )
}
