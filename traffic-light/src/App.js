
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from 'react';


function App() {

    const [color, setColor] = useState('')

    return (

        <div className="container">

            <div className="bar">

            </div>

            <div className="body">

                <div className={`red ${color === 'red' ? 'on' : ''} `} 
                onClick={() => setColor('red')}></div>

                <div className={`yellow ${color === 'yellow' ? 'on' : ''} `} onClick={() => setColor('yellow')}></div>

                <div className={`green ${color === 'green' ? 'on' : ''} `} onClick={() => setColor('green')}></div>
            </div>

        </div>



    );
}

export default App;
