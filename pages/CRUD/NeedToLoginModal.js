import Modal from "../Modal"
import DisplayAlert from "../Modal/DisplayAlert"
import CloseButton from "../Modal/DisplayAlert/CloseButton"
import {testPageContext} from ".."

const NeedToLoginModal=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {showModal,closeModal,logged}=value??{}
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
    </testPageContext.Consumer>
)

export default NeedToLoginModal