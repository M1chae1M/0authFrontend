const LI=({children})=>{
    const style={
        color:'#0d6efd',
        marginRight:'1em',
    }
    return(
        <div>
            <a style={style}>{"\u25A0"}</a>
            {children}
        </div>
    )
}

export default LI