import THEAD from "../table/MainTable/thead"
import {connect} from "react-redux"

const BuildTHEAD=({loadingFields,selectLoading,reqData})=>{
    const KEYs=!selectLoading && reqData?.length>0 && reqData?.[0] ? Object.keys(reqData?.[0]) : loadingFields
    return KEYs && <THEAD fields={KEYs}/>
}

const mapStateToProps=({crud:{selectLoading,reqData}})=>({
    selectLoading,
    reqData,
})
const mapDispatchToProps=(dispatch)=>({})
  
export default connect(mapStateToProps,mapDispatchToProps)(BuildTHEAD)