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
    <DisplayAlert text='Czy na pewno chcesz usunąć swoje konto?' style={styles.DisplayAlert}>
        <div>
            Ta operacja będzie nieodwracalna, jednak będziesz mógł założyć nowe konto na ten sam mail, lub konto w wybranym serwisie społecznościowym.
        </div>
        <div>
            <BTNstyled id="toggle-menu" className="btn btn-primary" onClick={deleteAgree}>Tak</BTNstyled>
            <BTNstyled id="toggle-menu" className="btn btn-secondary" style={styles.lowerButton} onClick={onClick}>Nie</BTNstyled>
        </div>
        <CloseButton onClick={onClick}/>
    </DisplayAlert>
)

export default DeleteModal