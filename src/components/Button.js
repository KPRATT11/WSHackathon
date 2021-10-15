import './Button.css'

export default function Button(props) {
    return (
        <a href="#" class="myButton"><img src={props.icon} alt={props.alt} /></a>
    )
}