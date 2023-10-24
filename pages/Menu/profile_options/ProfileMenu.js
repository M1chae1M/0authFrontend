import {Component} from "react"
import {ContextOfAuthHOC} from "../../login/AuthHoc"
import ProfileIcon from "./ProfileIcon"
import {createFetch} from "../../_app"
import {BsPerson,BsTrash,BsBoxArrowRight} from 'react-icons/bs'
import ProfileBTN from "./ProfileBTN"
import MenuList from "../List/MenuList"
import Modal from "../../Modal"
import DeleteModal from "../Variants/Delete"
import AccountDataModal from "../Variants/AccountData"
import ToAnimateIcon from "./ToAnimateIcon"
import LogoutModal from "../Variants/Logout"

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
                const {showProf,showProfileState}=value??{}

                const close=()=>this.setState({showOptionModal:false})
                const show=()=>this.setState({display:!display},isLoggedFunction)
                const accountData=async()=>{
                    createFetch('account/data',{},async(data)=>{
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
                const logoutAgree=()=>{
                    this.setState({display:false,showOptionModal:true,modalVariant:'logout' });
                }
                const MODALS={
                    deleteAccount:<DeleteModal onClick={close} deleteAgree={deleteAgree}/>,
                    accountData:<AccountDataModal result={result} onClick={close}/>,
                    logout:<LogoutModal logout={logout} onClick={close}/>
                }
                const Variant=()=>MODALS?.[modalVariant]
                return(
                    logged &&
                    <>
                        <div className="container" style={styles.container}>
                            {!showOptionModal && <ProfileIcon show={show}/>}
                            <MenuList display={display}>
                                <ProfileBTN onClick={accountData}>
                                    <ToAnimateIcon>Twoje dane</ToAnimateIcon>
                                    <BsPerson/>
                                </ProfileBTN>
                                <ProfileBTN onClick={deleteAccount}>
                                    <ToAnimateIcon>Usuń konto</ToAnimateIcon>
                                    <BsTrash/>
                                </ProfileBTN>
                                <ProfileBTN onClick={logoutAgree}>
                                    <ToAnimateIcon>Logout</ToAnimateIcon>
                                    <BsBoxArrowRight/>
                                </ProfileBTN>
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