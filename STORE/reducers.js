import types from './types'

const initState={
    selectLoading:false,
    formState:'select',
    showModal:false,
    limit:6,
    page:0,
    reqData:[],
    where:{},
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