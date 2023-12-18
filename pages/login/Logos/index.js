import {height} from "@/pages/_app"

const style={
    display:'grid',
    gridAutoFlow:'column',
    justifyItems:'center',
    alignItems:'center',
    fontSize:height,
    lineHeight:height,
    justifyContent:'space-evenly',
    color:'#0b5ed7',
}

const LogosContainer=({children})=>(
    <div style={style}>
        {children}
    </div>
)

export default LogosContainer