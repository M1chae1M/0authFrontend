const TDs=({record, fields})=>fields?.map(fieldName=><td key={fieldName}>{record?.[fieldName]}</td>)

export default TDs