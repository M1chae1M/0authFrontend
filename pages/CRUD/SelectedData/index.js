import Modal from "../../Modal"
import CloseButton from "../../Modal/DisplayAlert/CloseButton"
import DisplayAlert from "../../Modal/DisplayAlert" 
import TableContainer from '../table';
import Table from 'react-bootstrap/Table';
import {testPageContext} from "../..";
import BuildTHEAD from "./BuildTHEAD";
import TBODY from "../table/MainTable";

const SelectedData=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {showModal,closeModal,logged,data,fields,selectLoading,reqData}=value??{}
        const loadingFields=data && Object.keys(data)?.length>0 ? Object.keys(data) : fields
        const alertStyles={
            minHeight:'20vh',
            minWidth:'40vw',
        }
        return(
            <Modal show={showModal && logged}>
                <DisplayAlert text='select result:' style={alertStyles}>
                    <TableContainer>
                    {
                        reqData?.length===0 && !selectLoading ?
                            <div>Niestety wynik zapytania jest pusty, ale możesz to zmienić zmieniając jego kryteria, lub dodając nowe rekordy.</div>:
                        <Table striped bordered hover>
                            <BuildTHEAD loadingFields={loadingFields}/>
                            <TBODY db={reqData} loading={selectLoading} fields={loadingFields}/>
                        </Table>
                    }
                    </TableContainer>
                    <CloseButton onClick={closeModal}/>
                </DisplayAlert>
            </Modal>
        )
    }}
    </testPageContext.Consumer>
)

export default SelectedData