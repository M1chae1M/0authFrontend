import Modal from "../Modal"
import DisplayAlert from "../Modal/DisplayAlert"
import CloseButton from "../Modal/DisplayAlert/CloseButton"
import {CRUDPageContext} from ".."
import {connect} from "react-redux"
import action from "@/STORE/CRUD/action"

const NeedToLoginModal=({showModal, close_modal})=>(
    <CRUDPageContext.Consumer>
    {value=>{
        const {logged}=value??{}
        const style={
            display:'grid',
            justifyItems:'center',
        }
        return(
            <Modal show={showModal && !logged}>
                <DisplayAlert text='Please log in first!' style={style}>
                    You must be a logged-in user to perform database queries.
                    <CloseButton onClick={close_modal}/>
                </DisplayAlert>
            </Modal>
        )
    }}
    </CRUDPageContext.Consumer>
)

const mapStateToProps=({crud:{showModal}})=>({
    showModal,
})
const mapDispatchToProps=(dispatch)=>({
    close_modal:()=>dispatch(action.close_modal())
})
  
export default connect(mapStateToProps,mapDispatchToProps)(NeedToLoginModal)