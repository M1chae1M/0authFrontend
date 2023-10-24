import Link from 'next/link'
import BlueBTN_hover from '../CRUD/BlueBTN_hover'

const LI=({text})=>(
    <div className="nav-item">
        {text===''?'home':text}
    </div>
)

const LinkTo=({h, path, logged})=>{
    const name=`nav-link ${path===h && 'active'}`
    return(
        !logged?
        <BlueBTN_hover>
            <Link className={name} href={`/${h}`}>
                <LI text={h}/>
            </Link>
        </BlueBTN_hover>:
        <BlueBTN_hover>
            <div className={name} style={{color:'grey'}}>
                <LI text={h}/>
            </div>
        </BlueBTN_hover>
    )
}

export default LinkTo