import BuildTHEAD from "./BuildTHEAD";
import TBODY from "../table/MainTable/tbody";
import Table from 'react-bootstrap/Table';
import {connect} from "react-redux";
import fields from '@/config/fields.json'

const SelectedDataBody=({selectLoading,reqData,data})=>{
    const loadingFields=data && Object.keys(data)?.length>0 ? Object.keys(data) : fields
    return(
        reqData?.length===0 && !selectLoading ?
            <div>Unfortunately, the query result is empty, but you can change this by changing its criteria, or adding new records.</div>:
        <Table striped bordered hover>
            <BuildTHEAD loadingFields={loadingFields}/>
            <TBODY db={reqData} loading={selectLoading} fields={loadingFields}/>
        </Table>
    )
}

const mapStateToProps=({selectLoading,reqData,data})=>({selectLoading,reqData,data})
const mapDispatchToProps=(dispatch)=>({})

export default connect(mapStateToProps,mapDispatchToProps)(SelectedDataBody)