const styles={
    backdropFilter:'blur(1px)',
    width:'100vw',
    height:'100vh',
    minWidth:'100%',
    minHeight:'100%',
    position:'fixed',
    left:'0',
    top:'0',
    display:'grid',
    justifyItems:'center',
    alignItems:'center',
    zIndex:2100,
}

const Background=({children})=>(
    <div style={styles} name='background'>
        {children}
    </div>
)

export default Background