import DisplayAlert from "@/pages/Modal/DisplayAlert"
import CloseButton from "@/pages/Modal/DisplayAlert/CloseButton"
import styled from "styled-components"

const BTNstyled=styled.button`
transition:all 0.2s ease-in-out;
&:hover{
    scale:1.1 !important;
}`

const styles={
    DisplayAlert:{
        display:'grid',
        justifyItems:'center',
    },
    lowerButton:{
        scale:'95%'
    }
}

const DeleteModal=({onClick, deleteAgree})=>(
    <DisplayAlert text='Are you sure you want to delete your account?' style={styles.DisplayAlert}>
        <div>
            This operation will be irreversible,
            but you will be able to create a new account with the same email,
            or an account on the social network of your choice.
        </div>
        <div>
            <BTNstyled id="toggle-menu" className="btn btn-primary" onClick={deleteAgree}>Yes</BTNstyled>
            <BTNstyled id="toggle-menu" className="btn btn-secondary" style={styles.lowerButton} onClick={onClick}>No</BTNstyled>
        </div>
        <CloseButton onClick={onClick}/>
    </DisplayAlert>
)

export default DeleteModal