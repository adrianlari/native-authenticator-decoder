const inputFontSize = "25px";
const explanationFontSize = "18px";
const fontFamily = "Roboto Mono";
const width = "100%";

const BLACK = "#000";
const PURPLE = "#d63aff";
const RED = "#fb015b";
const BLUE = "#00b9f1";

const colors = {
  dot: BLACK,
  address: PURPLE,
  blockhash: RED,
  body: RED,
  extrainfo: RED,
  host: RED,
  signature: BLUE,
  ttl: RED,
  rest: RED,
};

const sections = {
  0: "address",
  1: "rest",
  2: "signature",
};

export {
  inputFontSize,
  explanationFontSize,
  fontFamily,
  width,
  colors,
  sections,
};
