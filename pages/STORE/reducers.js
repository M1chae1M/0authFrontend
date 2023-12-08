import types from './types'

const initState={
    selectLoading:false,
    formState:'select',
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