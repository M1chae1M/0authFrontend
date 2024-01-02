import Router from "next/router";
import BlueBTN_hover from "./components/BlueBTN_hover";
import AuthHOC from "./login/AuthHoc";
import Headers from "./resource_code/Headers";
import Modal from "./Modal";
import action from "@/STORE/auth/action";
import {connect} from "react-redux";

const styles={
    margin:'15px',
    border:'solid #f0f0f0 1px',
    padding:'15px',
    padding:'35px',
    borderRadius:'10px',
    boxShadow:'2px 2px #e0e0e0',
    width:'fit-content',
}

const backToHome=()=>Router?.push?.('/')

const Error404=()=>(
    <Modal show={true}>
        <div style={styles}>
            <Headers>404 - Page Not Found</Headers>
            The page you are looking for does not exist.
            <BlueBTN_hover>
                <button type="button" className="btn btn-primary" onClick={backToHome}>Return to homepage</button>
            </BlueBTN_hover>
        </div>
    </Modal>
)

// export default AuthHOC(Error404)
const mapStateToProps=({auth:{login_loading_state}})=>({login_loading_state})
const mapDispatchToProps=(dispatch)=>({})
    
export default connect(mapStateToProps,mapDispatchToProps)(AuthHOC(Error404))