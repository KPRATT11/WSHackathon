import './Button.css'

export default function Button(props) {
    return (
        <a href="/" className="myButton"><img src={props.icon} alt={props.alt} /></a>
    )
}