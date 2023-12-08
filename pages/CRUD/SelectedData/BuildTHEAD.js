import {CRUDPageContext} from "@/pages"
import THEAD from "../table/MainTable/thead"
import {connect} from "react-redux"

const BuildTHEAD=({loadingFields,selectLoading})=>(
    <CRUDPageContext.Consumer>
    {value=>{
        const {reqData}=value??{}
        const KEYs=!selectLoading && reqData?.length>0 && reqData?.[0] ? Object.keys(reqData?.[0]) : loadingFields
        return KEYs && <THEAD fields={KEYs}/>
    }}
    </CRUDPageContext.Consumer>
)

const mapStateToProps=(state)=>({
    selectLoading:state.selectLoading,
})
const mapDispatchToProps=(dispatch)=>({
})
  
export default connect(mapStateToProps,mapDispatchToProps)(BuildTHEAD)