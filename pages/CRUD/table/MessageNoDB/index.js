import {testPageContext} from "../../.."

const MessageNoDB=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {logged,db,db_loading}=value??{}
        const length=db?.length ?? 0
        return(
            length===0 && !db_loading &&
            <div>
                {logged?'Missing data. Try adding a new record to the database!':'You are not logged in.'}
            </div>
        )
    }}
    </testPageContext.Consumer>
)

export default MessageNoDB