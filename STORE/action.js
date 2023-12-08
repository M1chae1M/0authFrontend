import types from './types'

const change_state=(newState)=>({type:types.CHANGE_STATE, ...newState})

export default {
    change_state,
}