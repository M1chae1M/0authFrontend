const ProfileIcon=({show})=>(
    <div className="text-right mt-2">
        <button id="toggle-menu" className="btn btn-primary" onClick={show}>
            <i className="fas fa-user"></i> Profil
        </button>
    </div>
)

export default ProfileIcon