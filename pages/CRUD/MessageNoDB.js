import {testPageContext} from ".."

const MessageNoDB=()=>(
    <testPageContext.Consumer>
    {value=>{
        const {logged,db,db_loading}=value??{}
        return(
            db?.length===0 && !db_loading &&
            <div>
                {logged?'Brak danych. Spróbuj dodać nowy rekord do bazy danych!':'Nie jesteś zalogowany.'}
            </div>
        )
    }}
    </testPageContext.Consumer>
)

export default MessageNoDB