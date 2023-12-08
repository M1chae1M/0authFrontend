import {CRUDPageContext} from "@/pages"
import THEAD from "../table/MainTable/thead"
import {connect} from "react-redux"
import action from "@/pages/STORE/action"

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
    change_selectLoading:(newValue)=>dispatch(action.change_selectLoading(newValue))
})
  
export default connect(mapStateToProps,mapDispatchToProps)(BuildTHEAD)