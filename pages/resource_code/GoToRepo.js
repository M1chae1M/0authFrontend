import BlueBTN_hover from "../components/BlueBTN_hover"

const GoToRepo=({href})=>(
    <a href={`https://github.com/M1chae1M/0auth${href}`} target='_blank'>
        <BlueBTN_hover>
            <button type="button" className="btn btn-primary">View the project source code</button>
        </BlueBTN_hover>
    </a>
)

export default GoToRepo