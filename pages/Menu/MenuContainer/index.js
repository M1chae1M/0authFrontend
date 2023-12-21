const style={
    display:'grid',
    gridAutoFlow:'column',
    gridGap:'5px',
    justifyContent:'center',
    position:'sticky',
    top:'0%',
    width:'100vw',
    left:'0%',
    zIndex:500,
    background:'white',
    userSelect:'none',
}

const MenuContainer=({children})=>(
    <div style={style}>
        {children}
    </div>
)

export default MenuContainer