export default function Input(props) {
    return(
        <p>
            <label>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required
            />
        </p>
    )
}