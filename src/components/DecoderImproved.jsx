import { useState } from "react";
import RichTextArea from "./RichTextArea.jsx";
import { TextTypes } from "../TextTypes.ts";
import HeaderTextLine from "./HeaderTextLine.tsx";
import decode from "../decoder.js";
import "../jwt.css";
import * as constants from "../constants.js";

const DecoderImproved = () => {
  // const [token, setToken] = useState("");

  const [address, setAddress] = useState("");
  const [body, setBody] = useState("");
  const [blockHash, setBlockHash] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [host, setHost] = useState("");
  const [signature, setSignature] = useState("");
  const [ttl, setTtl] = useState("");

  const [isDecodedSelected, setIsdecodedSelected] = useState(true);

  const tryDecode = async (token) => {
    const decoded = await decode(token);

    if (!decoded) {
      setAddress("");
      setBlockHash("");
      setBody("");
      setExtraInfo("");
      setHost("");
      setSignature("");
      setTtl("");

      return;
    }

    // setIsValidToken(true);
    setAddress(decoded.address);
    setBlockHash(decoded.blockHash);
    setBody(decoded.body);
    setExtraInfo(decoded.extraInfo);
    setHost(decoded.host);
    setSignature(decoded.signature);
    setTtl(decoded.ttl);
  };

  return (
    <section className="debugger-jwt">
      <div className="container">
        <div className="jwt-playground">
          <div className="algorithm-code">
            <div className="tab-nav">
              <div
                className={"tab-link " + (isDecodedSelected ? "current" : "")}
              >
                <a href="/#" onClick={() => setIsdecodedSelected(true)}>
                  Encoded<small>paste a token here</small>
                </a>
              </div>
              <div
                className={"tab-link " + (!isDecodedSelected ? "current" : "")}
              >
                <a href="/#" onClick={() => setIsdecodedSelected(false)}>
                  Decoded<small>decoded token</small>
                </a>
              </div>
            </div>
            <div className="tab-content">
              <div
                className={
                  "box-content " + (isDecodedSelected ? "current" : "")
                }
                id="encoded-jwt"
              >
                <div className="input js-input" style={{ height: "557px" }}>
                  <div className="CodeMirror cm-s-night CodeMirror-wrap CodeMirror-focused">
                    <div className="CodeMirror-scroll" tabIndex="-1">
                      <div
                        className="CodeMirror-sizer"
                        style={{
                          marginLeft: "0px",
                          marginBottom: "0px",
                          borderRightWidth: "50px",
                          paddingRight: "0px",
                          paddingBottom: "0px",
                        }}
                      >
                        <div style={{ position: "relative", top: "0px" }}>
                          <div className="CodeMirror-lines">
                            <div
                              style={{ position: "relative", outline: "none" }}
                            >
                              <pre className="CodeMirror-line">
                                <RichTextArea
                                  onChangeFromParent={(token) => {
                                    tryDecode(token);
                                  }}
                                />
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  "box-content " + (!isDecodedSelected ? "current" : "")
                }
                id="decoded-jwt"
                heap-ignore="true"
              >
                <div className="output">
                  <div
                    style={{ borderRight: "none", marginRight: "0px" }}
                    className="jwt-explained jwt-header"
                  >
                    <HeaderTextLine
                      type={TextTypes.ADDRESS}
                      text="Elrond Address"
                    />
                    <div className="js-header">
                      <div className="CodeMirror cm-s-night CodeMirror-wrap CodeMirror-focused">
                        <div className="CodeMirror-scroll" tabIndex="-1">
                          <div
                            className="CodeMirror-sizer"
                            style={{
                              marginLeft: "0px",
                              marginBottom: "0px",
                              borderRightWidth: "50px",
                              paddingRight: "0px",
                              paddingBottom: "0px",
                            }}
                          >
                            <div style={{ position: "relative", top: "0px" }}>
                              <div className="CodeMirror-lines">
                                <div
                                  style={{
                                    position: "relative",
                                    outline: "none",
                                  }}
                                >
                                  <pre
                                    className="CodeMirror-line"
                                    style={{
                                      fontSize: constants.explanationFontSize,
                                      fontFamily: constants.fontFamily,
                                    }}
                                  >
                                    <RichTextArea
                                      explanationText={address}
                                      explanationType={TextTypes.ADDRESS}
                                    />
                                  </pre>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jwt-explained jwt-payload">
                    <HeaderTextLine type={TextTypes.BODY} text="Body" />
                    <div className="js-payload">
                      <div className="CodeMirror cm-s-default CodeMirror-wrap">
                        <div className="CodeMirror-scroll" tabIndex="-1">
                          <div
                            className="CodeMirror-sizer"
                            style={{
                              marginLeft: "0px",
                              marginBottom: "0px",
                              borderRightWidth: "50px",
                              paddingRight: "0px",
                              paddingBottom: "0px",
                            }}
                          >
                            <div style={{ position: "relative", top: "0px" }}>
                              <div className="CodeMirror-lines">
                                <div
                                  style={{
                                    position: "relative",
                                    outline: "none",
                                  }}
                                >
                                  <div>
                                    <pre
                                      className="CodeMirror-line"
                                      style={{
                                        fontSize: constants.explanationFontSize,
                                        fontFamily: constants.fontFamily,
                                      }}
                                    >
                                      <RichTextArea
                                        explanationText={body}
                                        explanationType={TextTypes.BODY}
                                      />
                                    </pre>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jwt-explained jwt-payload">
                    <HeaderTextLine
                      type={TextTypes.SIGNATURE}
                      text="Signature"
                    />
                    <div className="js-payload">
                      <div className="CodeMirror cm-s-default CodeMirror-wrap">
                        <div className="CodeMirror-scroll" tabIndex="-1">
                          <div
                            className="CodeMirror-sizer"
                            style={{
                              marginLeft: "0px",
                              marginBottom: "0px",
                              borderRightWidth: "50px",
                              paddingRight: "0px",
                              paddingBottom: "0px",
                            }}
                          >
                            <div style={{ position: "relative", top: "0px" }}>
                              <div className="CodeMirror-lines">
                                <div
                                  style={{
                                    position: "relative",
                                    outline: "none",
                                  }}
                                >
                                  <pre
                                    className="CodeMirror-line"
                                    style={{
                                      fontSize: constants.explanationFontSize,
                                      fontFamily: constants.fontFamily,
                                    }}
                                  >
                                    <RichTextArea
                                      explanationText={signature}
                                      explanationType={TextTypes.SIGNATURE}
                                    />
                                  </pre>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jwt-explained jwt-payload">
                    <HeaderTextLine
                      type={TextTypes.BLOCK_HASH}
                      text="BlockHash"
                    />
                    <div className="js-payload">
                      <div className="CodeMirror cm-s-default CodeMirror-wrap">
                        <div className="CodeMirror-scroll" tabIndex="-1">
                          <div
                            className="CodeMirror-sizer"
                            style={{
                              marginLeft: "0px",
                              marginBottom: "0px",
                              borderRightWidth: "50px",
                              paddingRight: "0px",
                              paddingBottom: "0px",
                            }}
                          >
                            <div style={{ position: "relative", top: "0px" }}>
                              <div className="CodeMirror-lines">
                                <div
                                  style={{
                                    position: "relative",
                                    outline: "none",
                                  }}
                                >
                                  <div>
                                    <pre
                                      className="CodeMirror-line"
                                      style={{
                                        fontSize: constants.explanationFontSize,
                                        fontFamily: constants.fontFamily,
                                      }}
                                    >
                                      <RichTextArea
                                        explanationText={blockHash}
                                        explanationType={TextTypes.BLOCK_HASH}
                                      />
                                    </pre>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jwt-explained jwt-payload">
                    <HeaderTextLine type={TextTypes.HOST} text="Hosting" />
                    <div className="js-payload">
                      <div className="CodeMirror cm-s-default CodeMirror-wrap">
                        <div className="CodeMirror-scroll" tabIndex="-1">
                          <div
                            className="CodeMirror-sizer"
                            style={{
                              marginLeft: "0px",
                              marginBottom: "0px",
                              borderRightWidth: "50px",
                              paddingRight: "0px",
                              paddingBottom: "0px",
                            }}
                          >
                            <div style={{ position: "relative", top: "0px" }}>
                              <div className="CodeMirror-lines">
                                <div
                                  style={{
                                    position: "relative",
                                    outline: "none",
                                  }}
                                >
                                  <div>
                                    <pre
                                      className="CodeMirror-line"
                                      style={{
                                        fontSize: constants.explanationFontSize,
                                        fontFamily: constants.fontFamily,
                                      }}
                                    >
                                      <RichTextArea
                                        explanationText={host}
                                        explanationType={TextTypes.HOST}
                                      />
                                    </pre>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jwt-explained jwt-payload">
                    <HeaderTextLine type={TextTypes.TTL} text="Time to live" />
                    <div className="js-payload">
                      <div className="CodeMirror cm-s-default CodeMirror-wrap">
                        <div className="CodeMirror-scroll" tabIndex="-1">
                          <div
                            className="CodeMirror-sizer"
                            style={{
                              marginLeft: "0px",
                              marginBottom: "0px",
                              borderRightWidth: "50px",
                              paddingRight: "0px",
                              paddingBottom: "0px",
                            }}
                          >
                            <div style={{ position: "relative", top: "0px" }}>
                              <div className="CodeMirror-lines">
                                <div
                                  style={{
                                    position: "relative",
                                    outline: "none",
                                  }}
                                >
                                  <div>
                                    <pre
                                      className="CodeMirror-line"
                                      style={{
                                        fontSize: constants.explanationFontSize,
                                        fontFamily: constants.fontFamily,
                                      }}
                                    >
                                      <RichTextArea
                                        explanationText={ttl}
                                        explanationType={TextTypes.TTL}
                                      />
                                    </pre>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jwt-explained jwt-payload">
                    <HeaderTextLine
                      type={TextTypes.EXTRA_INFO}
                      text="Extra information"
                    />
                    <div className="js-payload">
                      <div className="CodeMirror cm-s-default CodeMirror-wrap">
                        <div className="CodeMirror-scroll" tabIndex="-1">
                          <div
                            className="CodeMirror-sizer"
                            style={{
                              marginLeft: "0px",
                              marginBottom: "0px",
                              borderRightWidth: "50px",
                              paddingRight: "0px",
                              paddingBottom: "0px",
                            }}
                          >
                            <div style={{ position: "relative", top: "0px" }}>
                              <div className="CodeMirror-lines">
                                <div
                                  style={{
                                    position: "relative",
                                    outline: "none",
                                  }}
                                >
                                  <div>
                                    <pre
                                      className="CodeMirror-line"
                                      style={{
                                        fontSize: constants.explanationFontSize,
                                        fontFamily: constants.fontFamily,
                                      }}
                                    >
                                      <RichTextArea
                                        explanationText={extraInfo}
                                        explanationType={TextTypes.EXTRA_INFO}
                                      />
                                    </pre>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecoderImproved;
