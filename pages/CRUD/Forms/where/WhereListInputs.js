import Where_list_element from "../columns/where_list_element"
import {CRUDPageContext} from "@/pages"

const WhereListInputs=()=>(
    <CRUDPageContext.Consumer>
    {value=>{
        const {changeValues,where}=value??{}
        return(
            Object.keys(where??{})?.map(x=>(
                <Where_list_element key={x} name={x} onChange={(e)=>changeValues(e,'where',x)}/>)
            )
        )
    }}
    </CRUDPageContext.Consumer>
)

export default WhereListInputs