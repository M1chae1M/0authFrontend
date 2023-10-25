import React from 'react';
import OnloadAnimatedContainer from '../OnloadAnimatedContainer';
import Headers from '../Headers';

const Readme=()=>(
    <OnloadAnimatedContainer>
        <Headers>Readme:</Headers>
        <div>
            Aplikacja internetowa, której # główne funkcje, to:
            <ul>
                <li>nauka pracy z serverless'owym hostingiem</li>
                <li>Budowa sprawnie działającego CRUD'a</li>
                <li>Nauka tworzenia różnych metody autoryzacji przy pomocy passport.js i jego strategii</li>
            </ul>
        </div>
    </OnloadAnimatedContainer>
)

export default Readme;