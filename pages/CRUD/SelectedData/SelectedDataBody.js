import BuildTHEAD from "./BuildTHEAD";
import TBODY from "../table/MainTable/tbody";
import Table from 'react-bootstrap/Table';
import {testPageContext} from "../..";

const SelectedDataBody=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {selectLoading,reqData,data,fields}=value??{}
        const loadingFields=data && Object.keys(data)?.length>0 ? Object.keys(data) : fields
        return(
            reqData?.length===0 && !selectLoading ?
                <div>Niestety wynik zapytania jest pusty, ale możesz to zmienić zmieniając jego kryteria, lub dodając nowe rekordy.</div>:
            <Table striped bordered hover>
                <BuildTHEAD loadingFields={loadingFields}/>
                <TBODY db={reqData} loading={selectLoading} fields={loadingFields}/>
            </Table>
        )
    }}
    </testPageContext.Consumer>
)

export default SelectedDataBody