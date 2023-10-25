import {testPageContext} from "@/pages"
import THEAD from "../table/MainTable/thead"

const BuildTHEAD=({loadingFields})=>(
    <testPageContext.Consumer>
    {value=>{
        const {reqData,selectLoading}=value??{}
        const KEYs=!selectLoading && reqData?.length>0 && reqData?.[0] ? Object.keys(reqData?.[0]) : loadingFields
        return KEYs && <THEAD fields={KEYs}/>
    }}
    </testPageContext.Consumer>
)

export default BuildTHEAD