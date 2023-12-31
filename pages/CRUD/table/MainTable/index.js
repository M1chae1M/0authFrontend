import THEAD from './thead';
import TBODY from './tbody';
import Table from 'react-bootstrap/Table';
import {CRUDPageContext} from '../../..';
import fields from '@/config/fields.json'

const MainTable=()=>(
    <CRUDPageContext.Consumer>
    {value=>{
        const {db,db_loading,logged}=value??{}
        const loading_finished=db?.length>0 && !db_loading
        return(
            (loading_finished || db_loading) && logged &&
            <Table striped bordered hover>
                <THEAD fields={fields}/>
                <TBODY db={db} loading={db_loading} fields={fields}/>
            </Table>
        )
    }}
    </CRUDPageContext.Consumer>
)

export default MainTable