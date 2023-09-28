import THEAD from './table/thead';
import TBODY from './table/tbody';
import Table from 'react-bootstrap/Table';
import {testPageContext} from '..';
import {fields} from '../_app';

const MainTable=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {db,db_loading}=value??{}
        return(
            db?.length>0 &&
            <Table striped bordered hover>
                <THEAD fields={fields}/>
                <TBODY db={db} loading={db_loading} fields={fields}/>
            </Table>
        )
    }}
    </testPageContext.Consumer>
)

export default MainTable