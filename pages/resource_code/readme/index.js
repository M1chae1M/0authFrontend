import React from 'react';
import OnloadAnimation from '../OnloadAnimatedContainer';
import Headers from '../Headers';
import UL from '../blueList/ul';
import LI from '../blueList/li';

const Readme=()=>(
    <OnloadAnimation>
        <Headers>Readme:</Headers>
        <div>
            A webapplication whose main functions are:
            <UL>
                <LI>Learning to work with serverless hosting</LI>
                <LI>Building an efficient CRUD</LI>
                <LI>Learning to create different authentication methods using passport.js and its strategies</LI>
            </UL>
        </div>
    </OnloadAnimation>
)

export default Readme;