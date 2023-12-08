import types from './types'

const initState={
    // test_value:'0000000000000000000',
    // page:0,
    // limit:6,

    selectLoading:false,
}

const reducer=(state=initState, action)=>{
    switch(action.type){
        // case types.NEW_TEST_TYPE:{
        //     return {...state, test_value:action.new_test_value}
        // }
        case 'change_selectLoading':{
            return {...state, selectLoading:action.selectLoading}
        }
        default:
            return state
    }
}

export default reducer