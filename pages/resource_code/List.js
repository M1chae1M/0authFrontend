const List=({array})=>(
    <ul>
        {array?.map(x=><li key={x}>{x}</li>)}
    </ul>
)

export default List