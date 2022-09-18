import { useState } from "react";

import TextareaAutosize from "react-textarea-autosize";
import TextTypes from "../TextTypes.ts";
import * as constants from "../constants.js";
import TextRun from "./TextRun";

const RichTextArea = ({
  explanationText,
  explanationType,
  onChangeFromParent,
}) => {
  const [text, setText] = useState("");
  const [textComp, setTextComp] = useState([]);

  let index = 1;

  const createObject = (text, type) => {
    return { text: text, type: type };
  };

  const inputChange = (e) => {
    let texty = e.target.value + "";
    setText(texty);
    onChangeFromParent(texty);

    let comps = [];

    while (texty.indexOf(".") >= 0) {
      let indexOfDot = texty.indexOf(".");

      if (indexOfDot === 0) {
        comps.push(createObject(".", TextTypes.DOT));
        texty = texty.slice(1);
        continue;
      }

      let component = createObject(
        texty.substring(0, indexOfDot),

        Object.values(TextTypes)[index++]
      );
      comps.push(component);

      texty = texty.slice(indexOfDot);
    }

    comps.push(
      createObject(
        texty,

        Object.values(TextTypes)[index]
      )
    );

    setTextComp(comps);
  };

  return (
    <>
      <div
        style={{
          width: constants.width,
        }}
      >
        {explanationText ?? (
          <TextRun text={explanationText} type={explanationType} />
        )}

        {textComp.map((comp) => {
          return (
            <TextRun
              key={comp.text + Math.random().toString()}
              text={comp.text}
              type={comp.type}
            />
          );
        })}
      </div>

      <TextareaAutosize
        value={text ? text : explanationText}
        spellCheck="false"
        readOnly={!!explanationText}
        style={{
          lineHeight: "150%",
          fontSize: explanationText
            ? constants.explanationFontSize
            : constants.inputFontSize,
          fontFamily: constants.fontFamily,
          width: constants.width,
          top: "0px",
          opacity: 1,
          color: "transparent",
          backgroundColor: "transparent",
          caretColor: "red",
          zIndex: 1000,
          position: "absolute",
          border: "none",
          overflow: "auto",
          padding: "0px",
          boxShadow: "none",
          resize: "none",
        }}
        onChange={(e) => inputChange(e)}
      />
    </>
  );
};

export default RichTextArea;
