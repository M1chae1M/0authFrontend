import Element from '../CRUD/Forms/columns/Element';
import Form from 'react-bootstrap/Form';

const {Label, Control}=Form

const FormElementBuilder=({name, type, formData, changeV})=>(
    <Element>
        <Label>{name?.charAt?.(0)?.toUpperCase?.()+name?.slice?.(1)}: </Label>
        <Control type={type} placeholder={`Enter your ${name}`} name={name} value={formData?.[name]} onChange={changeV}/>
    </Element>
)

export default FormElementBuilder