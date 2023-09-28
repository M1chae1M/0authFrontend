import {ImCross} from 'react-icons/im'
import styled from 'styled-components'

const CloseButton=styled(ImCross)`
  position:absolute;
  top:5%;
  right:5%;
  font-size:50px;
  transition:all 0.25s ease-in-out;
  z-index:1500;
  &:hover{
    scale:125%;
    color:red;
    opacity:0.7;
    transform:rotate(90deg);
  }
`

export default CloseButton