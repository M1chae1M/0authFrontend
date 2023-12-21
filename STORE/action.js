import types from './types'

const change_state=(newState)=>({type:types.CHANGE_STATE, ...newState})
const change_where_list=(payload)=>({type:types.CHANGE_WHERE_LIST, payload})

export default {
    change_state,
    change_where_list,
}