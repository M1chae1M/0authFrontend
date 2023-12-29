import types from './types'

const change_state=(newState)=>({type:types.CHANGE_STATE, ...newState})
// const change_where_list=(payload)=>({type:types.CHANGE_WHERE_LIST, payload})
// const change_data=(payload)=>({type:types.CHANGE_DATA, payload})
// const change_data_checkboxes=(payload)=>({type:types.CHANGE_DATA_CHECKBOXES, payload})
// const close_modal=()=>({type:types.CLOSE_MODAL})

export default {
    change_state,
    // change_where_list,
    // change_data,
    // change_data_checkboxes,
    // close_modal,
}