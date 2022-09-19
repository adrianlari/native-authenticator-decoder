import { useEffect, useState } from "react";

import TextareaAutosize from "react-textarea-autosize";
import TextTypes from "../TextTypes.ts";
import * as constants from "../constants.js";
import TextRun from "./TextRun";

const RichTextArea = ({ onChangeFromParent, displayedText }) => {
  const [text, setText] = useState("");
  const [textComps, setTextComps] = useState([]);

  const DOT = ".";

  let index = 0;

  const createObject = (text, type) => {
    return { text: text, type: type };
  };

  const hasDot = (text) => {
    return text.indexOf(DOT) >= 0;
  };

  const createTextComponents = (text) => {
    let textComponents = [];

    while (hasDot(text)) {
      let indexOfDot = text.indexOf(DOT);

      if (indexOfDot === 0) {
        textComponents.push(createObject(DOT, TextTypes.DOT));
        text = text.slice(1);
        continue;
      }

      let word = constants.sections[index++];

      let component = createObject(text.substring(0, indexOfDot), word);

      textComponents.push(component);

      text = text.slice(indexOfDot);
    }

    textComponents.push(createObject(text, constants.sections[index]));

    setTextComps(textComponents);
  };

  const changeText = (text) => {
    setText(text);
    createTextComponents(text);
  };

  const handleInputChanged = (e) => {
    let texty = e.target.value + "";
    changeText(texty);
    onChangeFromParent(texty);
  };

  useEffect(() => {
    if (displayedText === text) return;

    changeText(displayedText);
  });

  return (
    <>
      <div
        style={{
          width: constants.width,
        }}
      >
        {textComps.map((component) => {
          return (
            <TextRun
              key={component.text + Math.random().toString()}
              text={component.text}
              type={component.type}
            />
          );
        })}
      </div>

      <TextareaAutosize
        spellCheck={false}
        value={text}
        style={{
          caretColor: "red",
          fontSize: constants.inputFontSize,
          fontFamily: constants.fontFamily,
          width: constants.width,
        }}
        onChange={(e) => handleInputChanged(e)}
      />
    </>
  );
};

export default RichTextArea;
