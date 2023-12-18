import Element from '../CRUD/Forms/columns/Element';
import Form from 'react-bootstrap/Form';
import {ContextOfAuthHOC} from '../login/AuthHoc';
import {toUpperCase1Char} from '@/functions/toUpperCase1Char';

const {Label, Control}=Form

const FormElementBuilder=({name, type})=>(
  <ContextOfAuthHOC.Consumer>
  {value=>{
    const {formData, changeV}=value??{}
    const label=toUpperCase1Char(name)
    return(
      <Element>
        <Label>{label}:</Label>
        <Control type={type} placeholder={`Enter your ${name}`} name={name} value={formData?.[name]} onChange={changeV} autoComplete="off"/>
      </Element>
    )
  }}
  </ContextOfAuthHOC.Consumer>
)

export default FormElementBuilder