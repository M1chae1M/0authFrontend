import React from "react";
import SwitchButton from "./switch_button";
// import {CRUD} from "@/pages/_app";
import CRUD from '@/config/CRUD.json'

const FormSwitches=()=>CRUD?.map(x=><SwitchButton key={x} type={x}/>)

export default FormSwitches