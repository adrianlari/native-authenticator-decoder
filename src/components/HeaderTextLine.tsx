import { TextTypes } from "../TextTypes"

interface IHeaderLine {
    type: TextTypes,
    text: string
}

const HeaderTextLine = ({ type, text }: IHeaderLine) => {
    return (
        <p className="text-line"> {type.toUpperCase()}:<span> {text}</span>
        </p>
    )
}

export default HeaderTextLine;