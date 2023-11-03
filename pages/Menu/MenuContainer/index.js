const style={
    display:'grid',
    gridAutoFlow:'column',
    gridGap:'5px',
    justifyContent:'center',
}

const MenuContainer=({children})=>(
    <div style={style}>
        {children}
    </div>
)

export default MenuContainer