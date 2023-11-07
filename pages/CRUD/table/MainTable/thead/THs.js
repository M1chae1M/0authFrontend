const style={
    position:'sticky',
    top:0,
    textAlign:'center',
}

const THs=({fields})=>fields?.map(x=><th key={x} style={style}>{x}</th>)

export default THs