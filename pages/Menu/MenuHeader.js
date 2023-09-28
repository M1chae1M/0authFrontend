const style={
    color:'#0d6efd',
    fontSize:'1.5rem',
    fontWeight:'bold',
}

const MenuHeader=({children})=>(
    <div className="nav nav-pills" style={style}>
        {children}
    </div>
)

export default MenuHeader