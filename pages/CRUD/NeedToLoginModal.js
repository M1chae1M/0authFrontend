import Modal from "../Modal"
import DisplayAlert from "../Modal/DisplayAlert"
import CloseButton from "../Modal/DisplayAlert/CloseButton"
import {CRUDPageContext} from ".."
import {connect} from "react-redux"
import action from "@/STORE/action"

const NeedToLoginModal=({showModal})=>(
    <CRUDPageContext.Consumer>
    {value=>{
        const {closeModal,logged}=value??{}
        const style={
            display:'grid',
            justifyItems:'center',
        }
        return(
            <Modal show={showModal && !logged}>
                <DisplayAlert text='Please log in first!' style={style}>
                    You must be a logged-in user to perform database queries.
                    <CloseButton onClick={closeModal}/>
                </DisplayAlert>
            </Modal>
        )
    }}
    </CRUDPageContext.Consumer>
)

const mapStateToProps=(state)=>({
    showModal:state.showModal,
})
const mapDispatchToProps=(dispatch)=>({
    change_state:(newState)=>dispatch(action.change_state(newState)),
})
  
export default connect(mapStateToProps,mapDispatchToProps)(NeedToLoginModal)