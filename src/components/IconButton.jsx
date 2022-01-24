import If from "../components/If"
import "../styles/IconButton.css"

export default function IconButton(props) {
    const color = props.color || "#00fa"

    return (
        <If hide={props.hide}>
            <button
                className={`icon-button`}
                style={{
                    backgroundColor: color
                }}
                onClick={props.onClick}
            >
                <i className={`fa fa-${props.icon}`}></i>
            </button>
        </If>
    )
}
