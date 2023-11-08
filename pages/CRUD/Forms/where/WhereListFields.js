import Check from "@/pages/components/check"
import {fields} from "@/pages/_app"
import {CRUDPageContext} from "@/pages"

const WhereListFields=()=>(
    <CRUDPageContext.Consumer>
    {value=>{
        const {onChangeDataBox}=value??{}
        return(
            fields?.map(x=>(
                <Check key={x} value={x} onChange={(e)=>onChangeDataBox(e,'where')}/>
            ))
        )
    }}
    </CRUDPageContext.Consumer>
)

export default WhereListFields