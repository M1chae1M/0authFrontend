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

const LoginMessage=({text,onClick})=>(
    <DisplayAlert text={text} style={styles}>
        <CloseButton onClick={onClick}/>
    </DisplayAlert>
)

export default LoginMessage