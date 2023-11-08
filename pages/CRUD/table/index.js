const TableContainer=({children,height})=>{
    const styles={
        height,
        overflowY:'auto',
        display:'grid',
        justifyItems:'center',
        alignItems:'center',
        marginBottom:'15px',
    }
    return <div style={styles}>
        {children}
    </div>
}

export default TableContainer