const li_styles={
    display:'grid',
    gridAutoFlow:'column',
    alignItems:'center',
    gridGap:'15px',
    direction:'rtl',
    gridTemplateColumns:'reverse',
}

const ProfileBTN=({children, onClick})=>(
    <li className="list-group-item" style={li_styles} onClick={onClick}>
        {children}
    </li>
)

export default ProfileBTN