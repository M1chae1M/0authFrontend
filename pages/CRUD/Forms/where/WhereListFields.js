import Check from "@/pages/components/check"
import {fields} from "@/pages/_app"

export const WhereListFields=({onChangeDataBox})=>(
    fields?.map(x=>(
        <Check key={x} value={x} onChange={(e)=>onChangeDataBox(e,'where')}/>
    ))
)

export default WhereListFields