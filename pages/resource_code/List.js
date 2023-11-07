import LI from "./blueList/li"
import UL from "./blueList/ul"

const List=({array})=>(
    <UL>
        {array?.map(x=><LI key={x}>{x}</LI>)}
    </UL>
)

export default List