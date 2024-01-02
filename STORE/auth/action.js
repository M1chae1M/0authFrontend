import types from './types'

const change_state=(newState)=>({type:types.CHANGE_STATE, ...newState})
const stop_waiting_for_login=()=>({type:types.STOP_WAITING_FOR_LOGIN})
const start_waiting_for_login=()=>({type:types.START_WAITING_FOR_LOGIN})

export default {
    change_state,
    stop_waiting_for_login,
    start_waiting_for_login,
}