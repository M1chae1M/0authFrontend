import DisplayAlert from "@/pages/Modal/DisplayAlert"
import CloseButton from "@/pages/Modal/DisplayAlert/CloseButton"

const styles={
    display:'grid',
    justifyItems:'center',
}

const AccountDataModal=({onClick,result})=>(
    <DisplayAlert text='Your data that we store about you is:' style={styles}>
        {
            Object?.keys?.(result??{})?.map(field=>(
            <div key={field}>
                {field}: {result?.[field]}
            </div>
            ))
        }
        <CloseButton onClick={onClick}/>
    </DisplayAlert>
)

export default AccountDataModal