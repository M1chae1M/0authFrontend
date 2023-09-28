import {BiLoaderCircle} from "react-icons/bi";
import styled,{keyframes} from 'styled-components'

const rotate=keyframes`
    from{transform:rotate(0deg)}
    to{transform:rotate(360deg)}
`;

const Spinner=styled(BiLoaderCircle)`
    font-size:85px !important;
    animation: ${rotate} 2s linear infinite;
`

export default Spinner