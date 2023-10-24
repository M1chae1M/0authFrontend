import Background from "./Background";

const Modal=({show,children})=>(
    show &&
    <Background>
        {children}
    </Background>
)

export default Modal