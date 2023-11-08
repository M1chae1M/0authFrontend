import Modal from "../../Modal"
import CloseButton from "../../Modal/DisplayAlert/CloseButton"
import DisplayAlert from "../../Modal/DisplayAlert" 
import TableContainer from '../table';
import {testPageContext} from "../..";
import SelectedDataBody from "./SelectedDataBody";
import {ContextOfAuthHOC} from "@/pages/login/AuthHoc";
import {Component} from "react";

class ChangeContainer extends Component{
    componentDidMount(){
        this.props.change?.();
    }
    render(){
        return this.props.children
    }
}

const SelectedData=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {showModal,closeModal,logged}=value??{}
        return(
            <ContextOfAuthHOC.Consumer>
            {value=>{
                const {changeAuthHOC}=value??{}
                const change=()=>changeAuthHOC?.({showSelected:showModal && logged});
                const styles={
                    minHeight:'20vh',
                    minWidth:'40vw',
                    maxWidth:'80%',
                }
                return(
                    <ChangeContainer change={change}>
                        <Modal show={showModal && logged}>
                            <DisplayAlert text='select result:' style={styles}>
                                <TableContainer>
                                    <SelectedDataBody/>
                                </TableContainer>
                                <CloseButton onClick={closeModal}/>
                            </DisplayAlert>
                        </Modal>
                    </ChangeContainer>
                )
            }}
            </ContextOfAuthHOC.Consumer>
        )
    }}
    </testPageContext.Consumer>
)

export default SelectedData