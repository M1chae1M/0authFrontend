import React from "react";
import SwitchButton from "./switch_button";
import {CRUD} from "@/pages/_app";
import BlueBTN_hover from "../../BlueBTN_hover";

const FormSwitches=()=>CRUD?.map(x=><SwitchButton key={x} type={x}/>)

export default FormSwitches