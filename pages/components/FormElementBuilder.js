import Element from '../CRUD/Forms/columns/Element';
import Form from 'react-bootstrap/Form';
import {ContextOfAuthHOC} from '../login/AuthHoc';

const {Label, Control}=Form

const FormElementBuilder=({name, type})=>(
  <ContextOfAuthHOC.Consumer>
  {value=>{
    const {formData, changeV}=value??{}
    return(
      <Element>
        <Label>{name?.charAt?.(0)?.toUpperCase?.()+name?.slice?.(1)}: </Label>
        <Control type={type} placeholder={`Enter your ${name}`} name={name} value={formData?.[name]} onChange={changeV} autoComplete="off"/>
      </Element>
    )
  }}
  </ContextOfAuthHOC.Consumer>
)

export default FormElementBuilder