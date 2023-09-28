import {Component} from "react";
import {ContextOfAuthHOC} from "../login/AuthHoc";
import ProfileIcon from "./ProfileIcon";
import {createFetch} from "../_app";
import {BsPerson,BsTrash,BsBoxArrowRight} from 'react-icons/bs';
import ProfileBTN from "./ProfileBTN";
import MenuList from "./List/MenuList";
import Modal from "../Modal";
import DeleteModal from "./Variants/Delete";
import AccountDataModal from "./Variants/AccountData";

export default class ProfileMenu extends Component{
    state={
        display:false,
        showOptionModal:false,
        result:{},
        modalVariant:'',
    }
    render(){
        const {display,showOptionModal,result,modalVariant}=this.state
        const styles={
            container:{
                position:'absolute',
                right:'5%',
                zIndex:5000,
                margin:0,
                padding:0,
                width:'fit-content',
            },
        }
        return(
            <ContextOfAuthHOC.Consumer>
            {value=>{
                const {logged,logout,isLoggedFunction}=value??{}
                const close=()=>this.setState({showOptionModal:false})
                const show=()=>this.setState({display:!display},isLoggedFunction)
                const accountData=async()=>{
                    createFetch('account/data',{},async(data)=>{
                        console.log(data);
                        await isLoggedFunction();
                        this.setState({result:data.result,display:false,showOptionModal:true});
                    })
                    this.setState({modalVariant:'accountData'})
                }
                const deleteAccount=async()=>{
                    await isLoggedFunction();
                    this.setState({display:false,showOptionModal:true,modalVariant:'deleteAccount' });
                }
                const deleteAgree=()=>{
                    createFetch('account/delete',{},()=>this.setState({display:false,showOptionModal:false},isLoggedFunction))
                }
                const MODALS={
                    deleteAccount:<DeleteModal onClick={close} deleteAgree={deleteAgree}/>,
                    accountData:<AccountDataModal result={result} onClick={close}/>,
                }
                const Variant=()=>MODALS?.[modalVariant]
                return(
                    logged &&
                    <>
                        <div className="container" style={styles.container}>
                            {!showOptionModal && <ProfileIcon show={show}/>}
                            <MenuList display={display}>
                                <ProfileBTN onClick={accountData}><BsPerson/>Twoje dane</ProfileBTN>
                                <ProfileBTN onClick={deleteAccount}><BsTrash/>Usuń konto</ProfileBTN>
                                <ProfileBTN onClick={logout}><BsBoxArrowRight/>Logout</ProfileBTN>
                            </MenuList>
                        </div>
                        <Modal show={showOptionModal}>
                            <Variant/>
                        </Modal>
                    </>
                )
            }}
            </ContextOfAuthHOC.Consumer>
        )
    }
}