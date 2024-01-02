import {CRUDPageContext} from "../../.."

const MessageNoDB=()=>(
    <CRUDPageContext.Consumer>
    {value=>{
        const {logged,db,db_loading}=value??{}
        const length=db?.length ?? 0
        return(
            ((length===0 && !db_loading) || !logged) &&
            <div>
                {logged?'Missing data. Try adding a new record to the database!':'You are not logged in.'}
            </div>
        )
    }}
    </CRUDPageContext.Consumer>
)

export default MessageNoDB