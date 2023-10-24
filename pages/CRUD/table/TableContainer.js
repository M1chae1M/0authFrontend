const styles={
    height:'200px',
    overflowY:'auto',
    display:'grid',
    justifyItems:'center',
    alignItems:'center',
}

const TableContainer=({children})=>(
    <div style={styles}>
        {children}
    </div>
)

export default TableContainer