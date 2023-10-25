import THEAD from './thead';
import TBODY from './tbody';
import Table from 'react-bootstrap/Table';
import {testPageContext} from '../../..';
import {fields} from '../../../_app';

const MainTable=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {db,db_loading}=value??{}
        const loading_finished=db?.length>0 && !db_loading
        return(
            (loading_finished || db_loading) &&
            <Table striped bordered hover>
                <THEAD fields={fields}/>
                <TBODY db={db} loading={db_loading} fields={fields}/>
            </Table>
        )
    }}
    </testPageContext.Consumer>
)

export default MainTable