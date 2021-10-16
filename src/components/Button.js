import './Button.css'

export default function RoomButton(props) {
    return (
        <button 
            className="myButton"
            onClick={() => {
                props.func(props.room)
            }}>
            <img src={props.icon} alt={props.alt} />
        </button>
    )
}