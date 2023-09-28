const MenuList=({children, display})=>{
    const styles={
        display:display?'block':'none',
        position:'absolute',
        zIndex:5000,
        right:'5%',
        margin:0,
        padding:0,
    }
    return <div id="user-menu" className="mt-2" style={styles}>
        <ul className="list-group">
            {children}
        </ul>
    </div>
}

export default MenuList