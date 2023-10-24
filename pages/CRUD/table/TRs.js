import TDs from "./TDs";
import styled from "styled-components"

const TR=styled.tr`
height:40px;
text-align:center;
&:hover{
    opacity:0.7;
}`

const TRs=({db, fields})=>db?.map((record, i)=><TR key={i}><TDs record={record} fields={fields}/></TR>)

export default TRs