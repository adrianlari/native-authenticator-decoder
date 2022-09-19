import { Text } from "react-native";
import * as constants from "../constants.js";

const TextRun = ({ type, text, isExplanation }) => {
  return (
    <>
      <Text
        style={{
          // color: colors[index++ % colors.length],
          fontSize: isExplanation
            ? constants.explanationFontSize
            : constants.inputFontSize,
          fontFamily: constants.fontFamily,
          width: constants.width,
          color: constants.colors[type],
          lineHeight: "150%",
        }}
      >
        {text}
      </Text>
    </>
  );
};

export default TextRun;
