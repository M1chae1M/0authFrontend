import React from 'react';
import OnloadAnimation from '../OnloadAnimatedContainer';
import Headers from '../Headers';

const Readme=()=>(
    <OnloadAnimation>
        <Headers>Readme:</Headers>
        <div>
            A webapplication whose main functions are:
            <ul>
                <li>Learning to work with serverless hosting</li>
                <li>Building an efficient CRUD</li>
                <li>Learning to create different authentication methods using passport.js and its strategies</li>
            </ul>
        </div>
    </OnloadAnimation>
)

export default Readme;