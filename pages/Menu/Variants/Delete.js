import DisplayAlert from "@/pages/Modal/DisplayAlert"
import CloseButton from "@/pages/Modal/DisplayAlert/CloseButton"

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
            <button id="toggle-menu" className="btn btn-primary" onClick={deleteAgree}>
                <i className="fas fa-user"></i> Tak
            </button>
            <button id="toggle-menu" className="btn btn-secondary" style={styles.lowerButton} onClick={onClick}>
                <i className="fas fa-user"></i> Nie
            </button>
        </div>
        <CloseButton onClick={onClick}/>
    </DisplayAlert>
)

export default DeleteModal