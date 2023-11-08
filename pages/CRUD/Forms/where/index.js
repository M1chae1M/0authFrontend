import {Form} from "react-bootstrap";
import WhereListFields from "./WhereListFields";
import WhereListInputs from "./WhereListInputs";

const {Label}=Form

const WHERE=()=>(
    <>
        <Label>Where: </Label>
        <WhereListFields/>
        <WhereListInputs/>
    </>
)

export default WHERE