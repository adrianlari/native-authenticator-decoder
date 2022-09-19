import * as constants from "../constants.js";
import TextareaAutosize from "react-textarea-autosize";
import TextRun from "./TextRun";

const ReadOnlyRichTextArea = ({ explanationText, explanationType }) => {
  return (
    <>
      <div
        style={{
          width: constants.width,
        }}
      >
        {explanationText && (
          <TextRun
            text={explanationText}
            type={explanationType}
            isExplanation
            readOnly
          />
        )}
      </div>

      <TextareaAutosize
        value={explanationText}
        spellCheck={false}
        readOnly
        style={{
          caretColor: "red",
          fontSize: constants.explanationFontSize,
          fontFamily: constants.fontFamily,
          width: constants.width,
        }}
      />
    </>
  );
};

export default ReadOnlyRichTextArea;
