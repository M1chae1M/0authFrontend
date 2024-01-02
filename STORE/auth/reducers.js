import types from './types'

const initState={
    login_loading_state:false,
}

const reducer=(state=initState, action)=>{
    switch(action.type){
        case types.CHANGE_STATE:{
            return {...state, ...action}
        }
        case types.STOP_WAITING_FOR_LOGIN:{
            return {...state, login_loading_state:false}
        }
        case types.START_WAITING_FOR_LOGIN:{
            return {...state, login_loading_state:true}
        }
        default:
            return state
    }
}

export default reducer