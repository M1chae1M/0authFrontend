import Form from 'react-bootstrap/Form';
import styled from "styled-components";

const CheckboxStyled=styled(Form.Check)`
transition:all 0.2s ease-in-out;
&:hover > * {
    scale:1.2;
    color:#007bff;
}
&:hover > input{
    border:solid #007bff 1px;
    opacity:0.7;
}`

const className="custom-control custom-radio custom-control-inline"

const Check=({value, onChange})=>(
    <CheckboxStyled key={value} type="checkbox" label={value} value={value} className={className} onChange={onChange}/>
)

export default Check