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
        case types.CHANGE_WHERE_LIST:{
            const {value,checked}=action.payload
            const where={...state.where};

            if(checked){
                where[value]=''
            }else{
                delete where?.[value];
            }

            return {...state, where}
        }
        default:
            return state
    }
}

export default reducer