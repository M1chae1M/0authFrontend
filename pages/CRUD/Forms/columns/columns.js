import Col from 'react-bootstrap/Col';

const styles={
    columns:{
        padding: '20px',
        borderRadius: '5px',
        position:'relative',
        overflowY:'scroll',
        maxHeight:'300px',
        height:'300px',
    },
    Left:{
        backgroundColor: '#f0f0f0',
    },
    right:{
        backgroundColor: '#e0e0e0',
    }
}
const left={...styles.columns, ...styles.Left}
const right={...styles.columns, ...styles.right}

const OneColumn=({children})=><div md={6} style={right}>{children}</div>

export const LeftColumn=({children})=><Col md={6} style={left}>{children}</Col>

export const RightColumn=({children})=><Col md={6} style={right}>{children}</Col>

export default OneColumn