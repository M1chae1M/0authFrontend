import styled from "styled-components"

const CONTAINER=styled.div`
transition:all 0.1s ease-in-out;
&:hover{
    scale:1.2;
    opacity:0.7;
}`
const ProfileIcon=({show})=>(
    <CONTAINER className="text-right mt-2">
        <button id="toggle-menu" className="btn btn-primary" onClick={show}>
            <i className="fas fa-user"></i> Profil
        </button>
    </CONTAINER>
)

export default ProfileIcon