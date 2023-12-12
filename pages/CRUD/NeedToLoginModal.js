import Modal from "../Modal"
import DisplayAlert from "../Modal/DisplayAlert"
import CloseButton from "../Modal/DisplayAlert/CloseButton"
import {CRUDPageContext} from ".."
import {connect} from "react-redux"

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
})
  
export default connect(mapStateToProps,mapDispatchToProps)(NeedToLoginModal)