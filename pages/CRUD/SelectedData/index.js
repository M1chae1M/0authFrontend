import Modal from "../../Modal"
import CloseButton from "../../Modal/DisplayAlert/CloseButton"
import DisplayAlert from "../../Modal/DisplayAlert" 
import TableContainer from '../table';
import {testPageContext} from "../..";
import SelectedDataBody from "./SelectedDataBody";

const SelectedData=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {showModal,closeModal,logged}=value??{}
        const styles={
            minHeight:'20vh',
            minWidth:'40vw',
        }
        return(
            <Modal show={showModal && logged}>
                <DisplayAlert text='select result:' style={styles}>
                    <TableContainer>
                        <SelectedDataBody/>
                    </TableContainer>
                    <CloseButton onClick={closeModal}/>
                </DisplayAlert>
            </Modal>
        )
    }}
    </testPageContext.Consumer>
)

export default SelectedData