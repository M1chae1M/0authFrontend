const styles={
    Container:{
        backgroundColor:"#f0f0f0",
        border:"2px solid #ccc",
        borderRadius:"10px",
        boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)",
        padding:"20px",
        margin:"20px",
    },
    Title:{
        fontSize:"24px",
        color:"#333",
        marginBottom:"10px",
    },
    page:{
        width:'100vw',
        height:'100vh',
        position:'absolute',
        top:0,
        left:0,
        display:'grid',
        justifyItems:'center',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    },
}

const DisplayAlert=({text, children, style})=>(
    <div style={styles.page}>
        <div style={{...styles.Container, ...style}}>
            <h1 style={styles.Title}>{text}</h1>
            {children}
        </div>
    </div> 
)

export default DisplayAlert