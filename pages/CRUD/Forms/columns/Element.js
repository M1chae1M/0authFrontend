import styled from "styled-components";

const Element=styled.div`
transition:0.2s ease-in-out;
&:hover >input::placeholder{
    color:#007bff;
}
&:hover >input{
    scale:1.01;
    opacity:0.7;
    border:solid #007bff 1.5px;
    color:#007bff;
    font-weight:bold;
}
&:hover > label{
    color:#007bff;
    font-weight:bold;
}`

export default Element