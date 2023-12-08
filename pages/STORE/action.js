import types from './types'

const newValue=(newTestValue)=>({type:types.NEW_TEST_TYPE,new_test_value:newTestValue})

export default {newValue}