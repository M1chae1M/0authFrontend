import types from './types'

const initState={
    selectLoading:false,
    formState:'select',
}

const reducer=(state=initState, action)=>{
    switch(action.type){
        case types.CHANGE_SELECTLOADING:{
            return {...state, selectLoading:action.selectLoading}
        }
        case types.CHANGE_FORMSTATE:{
            return {...state, formState:action.formState}
        }
        default:
            return state
    }
}

export default reducer