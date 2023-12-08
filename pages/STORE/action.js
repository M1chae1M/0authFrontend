import types from './types'

// const newValue=(newTestValue)=>({type:types.NEW_TEST_TYPE,new_test_value:newTestValue})
const change_selectLoading=(newValue)=>({type:'change_selectLoading',selectLoading:newValue})
export default {
    change_selectLoading
}