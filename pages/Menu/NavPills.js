import {ContextOfAuthHOC} from "../login/AuthHoc"
import LinkTo from "./LinkTo"

const NavPills=({path})=>(
    <ContextOfAuthHOC.Consumer>
    {value=>{
        const {logged}=value??{}
        return(
            <>
                <div className="nav nav-pills">
                    <LinkTo path={path} h={''}/>
                </div>
                <div className="nav nav-pills">
                    <LinkTo logged={logged} path={path} h='login'/>
                </div>
                <div className="nav nav-pills">
                    <LinkTo logged={logged} path={path} h='signin'/>
                </div>
                <div className="nav nav-pills">
                    <LinkTo path={path} h='resource_code'/>
                </div>
            </>
        )
    }}
    </ContextOfAuthHOC.Consumer>
)

export default NavPills