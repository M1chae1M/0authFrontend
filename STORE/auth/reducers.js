import types from './types'

const initState={
    // test:'',
    login_loading_state:false,
}

const reducer=(state=initState, action)=>{
    switch(action.type){
        case types.CHANGE_STATE:{
            return {...state, ...action}
        }
        default:
            return state
    }
}

export default reducer