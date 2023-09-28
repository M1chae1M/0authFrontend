import Link from 'next/link'

const LI=({text})=>(
    <div className="nav-item">
        {text===''?'home':text}
    </div>
)

const LinkTo=({h, path, logged})=>{
    const name=`nav-link ${path===h && 'active'}`
    return(
        !logged?
        <Link className={name} href={`/${h}`}>
            <LI text={h}/>
        </Link>: 
        <div className={name} style={{color:'grey'}}>
            <LI text={h}/>
        </div>
    )
}

export default LinkTo