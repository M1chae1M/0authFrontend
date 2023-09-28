import React from 'react';
import OnloadAnimatedContainer from '../OnloadAnimatedContainer';

const Frontend=()=>(
    <OnloadAnimatedContainer>
        <div>
        Frontend powstał przy użyciu:
        </div>
        <div>next.js</div>
        <div>styled-components</div>
        <div>react-bootstrap</div>
        <div>react-icons</div>


        <div>Dostępne są podstrony:</div>
        <div>/ - główna zawierająca CRUDA</div>
        <div>/login - strona dostępna tylko jeśli nie jesteś już zalogowany</div>
        <div>/signin - strona dostępna tylko jeśli nie jesteś już zalogowany</div>
        <div>/resource_code - strona na której się aktualnie znajdujesz</div>
        <div>/login/success i /login/failure są to ścieżki do których jest przykierowywany użytkownik po próbie zalogowania się przez: google, facebooka, czy github</div>





    </OnloadAnimatedContainer>
)

export default Frontend;