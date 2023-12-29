import types from './types'

const initState={
    selectLoading:false,
    formState:'select',
    showModal:false,
    limit:6,
    page:0,
    reqData:[],
    where:{},
    data:{},
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
        case types.CHANGE_DATA:{
            return {...state, data:{...state.data,...action.payload}}
        }
        case types.CHANGE_DATA_CHECKBOXES:{
            const {value,checked}=action.payload
            const data={...state.data};

            if(checked){
                return {...state, data:{...data, [value]:''}}
            }else{
                delete data?.[value];
                return {...state, data:data}
            }
        }
        default:
            return state
    }
}

export default reducer