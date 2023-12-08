import types from './types'

const change_selectLoading=(newValue)=>({type:types.CHANGE_SELECTLOADING,selectLoading:newValue})
const change_formState=(newValue)=>({type:types.CHANGE_FORMSTATE,formState:newValue})

export default {
    change_selectLoading,
    change_formState,
}