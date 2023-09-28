import TRs from "./TRs";
import LoadingTR from "./LoadingTR";

const TBODY=({db,loading,fields})=>(
    <tbody>
        {loading?<LoadingTR fields={fields}/>:<TRs db={db} fields={fields}/>}
    </tbody>
)

export default TBODY