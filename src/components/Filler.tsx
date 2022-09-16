import CodeMirrorGutterFiller from "./CodeMirrorGutterFiller.tsx"
import CodeMirrorScrollbarFiller from "./CodeMirrorScrollbarFiller.tsx"

const Filler = () => {
    return (<>
        <CodeMirrorScrollbarFiller />
        <CodeMirrorGutterFiller />
    </>)
}

export default Filler;