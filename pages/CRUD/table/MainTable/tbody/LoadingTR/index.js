import Placeholder from 'react-bootstrap/Placeholder';

const LoadingTR=({fields})=>(
    Array(4)?.fill?.(0)?.map((y,i)=>(
        <tr key={i} style={{textAlign:'center'}}>
            {fields?.map(x=>(
                <Placeholder key={x} as={'td'} animation="glow">
                    <Placeholder xs={6}/>
                </Placeholder>
            ))}
        </tr>
    ))
)

export default LoadingTR