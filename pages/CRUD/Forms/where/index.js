import {Form} from "react-bootstrap";
import {testPageContext} from "../../..";
import WhereListFields from "./WhereListFields";
import WhereListInputs from "./WhereListInputs";

const {Label}=Form

const WHERE=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {changeValues,where,onChangeDataBox}=value??{}
        return(
            <>
                <Label>Where: </Label>
                <WhereListFields onChangeDataBox={onChangeDataBox}/>
                <WhereListInputs changeValues={changeValues} where={where}/>
            </>
        )
    }}
    </testPageContext.Consumer>
)

export default WHERE