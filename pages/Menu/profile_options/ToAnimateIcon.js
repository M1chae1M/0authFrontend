import styled,{keyframes} from "styled-components"
const scale=2

const fadeIn=keyframes`
0%{
    transform:rotate(-30deg) scale(${scale});
}
50%{
    transform:rotate(30deg) scale(${scale});
    color:grey;
}
100%{
    transform:rotate(0deg);
    opacity:0.7;
}`

const ToAnimateIcon=styled.div`
&:hover{
    opacity:0.7;
}
&:hover + *{
    animation:${fadeIn} 0.5s ease-in-out both;
}`

export default ToAnimateIcon