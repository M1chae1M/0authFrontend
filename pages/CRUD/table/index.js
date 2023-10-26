const styles={
    height:'200px',
    overflowY:'auto',
    display:'grid',
    justifyItems:'center',
    alignItems:'center',
    marginBottom:'15px',
}

const TableContainer=({children})=>(
    <div style={styles}>
        {children}
    </div>
)

export default TableContainer