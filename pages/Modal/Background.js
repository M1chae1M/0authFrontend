import {Component} from "react";

export default class Background extends Component{
    render(){
        const {children, onClick}=this.props
        const styles={
            Background:{
                backdropFilter:'blur(1px)',
                width:'100vw',
                height:'100vh',
                position:'absolute',
                left:'0',
                top:'0',
                display:'grid',
                justifyItems:'center',
                alignItems:'center',
                zIndex:2100,
            }
        }

        return(
            <div style={styles.Background}
            // onClick={onClick}
            name='background'>
                {children}
            </div>
        )
    }
}