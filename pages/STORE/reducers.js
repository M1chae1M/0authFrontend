import types from './types'

const initState={
    // test_value:'0000000000000000000',
}

const reducer=(state=initState, action)=>{
    switch(action.type){
        // case types.NEW_TEST_TYPE:{
        //     return {...state, test_value:action.new_test_value}
        // }
        default:
            return state
    }
}

export default reducer