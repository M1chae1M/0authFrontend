import Modal from "../Modal"
import DisplayAlert from "../Modal/DisplayAlert"
import CloseButton from "../Modal/DisplayAlert/CloseButton"
import {testPageContext} from ".."

const NeedToLoginModal=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {showModal,closeModal,logged}=value??{}
        return(
            <Modal show={showModal && !logged}>
                <DisplayAlert text='Wpierw się zaloguj!'>
                    Aby wykonywać zapytania do bazy danych musisz być użytkownikiem zalogowanym.
                    <CloseButton onClick={closeModal}/>
                </DisplayAlert>
            </Modal>
        )
    }}
    </testPageContext.Consumer>
)

export default NeedToLoginModal