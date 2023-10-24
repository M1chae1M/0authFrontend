import React from 'react';
import OnloadAnimatedContainer from '../OnloadAnimatedContainer';
import Headers from '../Headers';

const Frontend=()=>(
    <OnloadAnimatedContainer>
        <Headers>Frontend:</Headers>

        <div>
        Frontend powstał przy użyciu:
        </div>
        <div>next.js</div>
        <div>styled-components</div>
        <div>react-bootstrap</div>
        <div>react-icons</div>
        <div>react-intersection-observer</div>
        <div>react-paginate</div>

        <div>Dostępne są podstrony:</div>
        <div>/ - główna zawierająca CRUDA (strona dostępna bez logowania, jednak nie pozwoli na manipulowanie bazą danych)</div>
        <div>/login - strona dostępna tylko jeśli nie jesteś już zalogowany</div>
        <div>/signin - strona dostępna tylko jeśli nie jesteś już zalogowany</div>
        <div>/resource_code - strona na której się aktualnie znajdujesz</div>
        <div>/login/success i /login/failure są to ścieżki do których jest przykierowywany użytkownik
            po próbie zalogowania się przez: google, facebooka, czy github</div>
        <div>Cały kod dostępny jest w repozytorium, które znajduje się tutaj:</div>
        <div>
https://github.com/M1chae1M/0authFrontend

        </div>
    </OnloadAnimatedContainer>
)

export default Frontend;