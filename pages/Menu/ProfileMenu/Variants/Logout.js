import BlueBTN_hover from "@/pages/components/BlueBTN_hover"
import DisplayAlert from "@/pages/Modal/DisplayAlert"
import CloseButton from "@/pages/Modal/DisplayAlert/CloseButton"

const styles={
    DisplayAlert:{
        display:'grid',
        justifyItems:'center',
    },
    Buttons:{
        display:'grid',
        gridAutoFlow:'column',
        gap:'10px',
        justifyContent:'center',
    }
}

const LogoutModal=({onClick,logout})=>(
    <DisplayAlert text='Are you sure you want to log out?' style={styles}>
        <div style={styles.Buttons}>
            <BlueBTN_hover>
                <button type="button" className="btn btn-primary" onClick={logout}>Yes</button>
            </BlueBTN_hover>
            <BlueBTN_hover>
                <button type="button" className="btn btn-secondary" onClick={onClick}>No</button>
            </BlueBTN_hover>
        </div>
        <CloseButton onClick={onClick}/>
    </DisplayAlert>
)

export default LogoutModal