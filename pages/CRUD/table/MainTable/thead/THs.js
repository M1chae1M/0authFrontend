const style={
    position:'sticky',
    top:0,
    textAlign:'center',



    // border:'solid black 1px',
}

const THs=({fields})=>fields?.map(x=><th key={x} style={style}>{x}</th>)

export default THs