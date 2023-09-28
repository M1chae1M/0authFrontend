import ProfileMenu from "./ProfileMenu";
import MenuHeader from "./MenuHeader";
import NavButtons from "./NavButtons";

const style={
    position:'sticky',
    top:'0',
    left:'0',
    width:'100%',
    display:'grid',
    justifyItems:'center',
    userSelect:'none',
    zIndex:1401,
    background:'white',
}

const Menu=()=>(
    <div style={style}>
        <MenuHeader>CRUD</MenuHeader>
        <NavButtons/>
        <ProfileMenu/>
    </div>
)

export default Menu