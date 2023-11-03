import React from 'react';
import OnloadAnimatedContainer from '../OnloadAnimatedContainer';
import Headers from '../Headers';

const Readme=()=>(
    <OnloadAnimatedContainer>
        <Headers>Readme:</Headers>
        <div>
            A webapplication whose main functions are:
            <ul>
                <li>Learning to work with serverless hosting</li>
                <li>Building an efficient CRUD</li>
                <li>Learning to create different authentication methods using passport.js and its strategies</li>
            </ul>
        </div>
    </OnloadAnimatedContainer>
)

export default Readme;