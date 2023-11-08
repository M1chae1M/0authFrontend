import Modal from "../../Modal"
import CloseButton from "../../Modal/DisplayAlert/CloseButton"
import DisplayAlert from "../../Modal/DisplayAlert" 
import TableContainer from '../table';
import {testPageContext} from "../..";
import SelectedDataBody from "./SelectedDataBody";
import {ContextOfAuthHOC} from "@/pages/login/AuthHoc";
import {useContext} from "react";
import {useEffect} from "react";

const SelectedData=()=>{
    const styles={
        minHeight:'20vh',
        minHeight:'40vh',
        minWidth:'40vw',
        maxWidth:'80%',
    }
    const {showModal,closeModal,logged}=useContext(testPageContext)??{};
    const {changeAuthHOC}=useContext(ContextOfAuthHOC)??{};
    useEffect(()=>changeAuthHOC?.({showSelected:showModal&&logged}),[showModal,logged,changeAuthHOC]);
    return(
        <Modal show={showModal&&logged}>
            <DisplayAlert text='select result:' style={styles}>
                <TableContainer height='30vh'>
                    <SelectedDataBody/>
                </TableContainer>
                <CloseButton onClick={closeModal}/>
            </DisplayAlert>
        </Modal>
    )
}
  
export default SelectedData