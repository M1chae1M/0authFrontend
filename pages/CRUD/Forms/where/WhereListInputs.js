import Where_list_element from "../columns/where_list_element"

const WhereListInputs=({where,changeValues})=>(
    Object.keys(where??{})?.map(x=>(
        <Where_list_element key={x} name={x} onChange={(e)=>changeValues(e,'where',x)}/>)
    )
)

export default WhereListInputs