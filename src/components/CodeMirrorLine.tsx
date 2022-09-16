interface ICodeMirrorLine {
    text: string,
    title: string
}

// to implement small nice popup for on hover title

const CodeMirrorLine = ({ text, title }: ICodeMirrorLine) => {
    return (
        <>
            <pre className="CodeMirror-line" >
                <span style={{ paddingRight: "0.1px" }}>
                    {text}
                </span>
            </pre>
        </>)

}

export default CodeMirrorLine;