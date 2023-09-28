import {Form} from "react-bootstrap";
import {testPageContext} from "../..";

const {Label}=Form

const WHERE=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {WhereListFields,WhereListInputs}=value??{}
        return(
            <>
                <Label>Where: </Label>
                {WhereListFields}
                {WhereListInputs}
            </>
        )
    }}
    </testPageContext.Consumer>
)

export default WHERE