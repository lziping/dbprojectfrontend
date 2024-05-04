import { Link } from "react-router-dom";

export function LinkBtn({ link, text }) {
    return (<Link class='LinkBtn' to={link}>
        <button >{text}</button>
    </Link >);
}

