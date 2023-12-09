import Modal from "../../Modal"
import CloseButton from "../../Modal/DisplayAlert/CloseButton"
import DisplayAlert from "../../Modal/DisplayAlert" 
import TableContainer from '../table';
import {CRUDPageContext} from "../..";
import SelectedDataBody from "./SelectedDataBody";
import {ContextOfAuthHOC} from "@/pages/login/AuthHoc";
import {useContext} from "react";
import {useEffect} from "react";
import {connect} from "react-redux";
import action from "@/STORE/action";

const SelectedData=({showModal})=>{
    const styles={
        minHeight:'20vh',
        minHeight:'40vh',
        minWidth:'40vw',
        maxWidth:'80%',
    }
    const {closeModal,logged}=useContext(CRUDPageContext)??{};
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
  
const mapStateToProps=(state)=>({
    showModal:state.showModal,
})
const mapDispatchToProps=(dispatch)=>({
    change_state:(newState)=>dispatch(action.change_state(newState)),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(SelectedData)