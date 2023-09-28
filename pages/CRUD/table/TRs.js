import TDs from "./TDs";

const TRs=({db, fields})=>db?.map((record, i)=><tr key={i} style={{height:'40px',textAlign:'center'}}><TDs record={record} fields={fields}/></tr>)

export default TRs