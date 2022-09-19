import { useEffect, useState } from "react";
import RichTextArea from "./RichTextArea.jsx";
import ReadOnlyRichTextArea from "./ReadOnlyRichTextArea.jsx";
import { TextTypes } from "../TextTypes.ts";
import HeaderTextLine from "./HeaderTextLine.tsx";
import decode from "../decoder.js";
import "../jwt.css";
import * as constants from "../constants.js";

const DecoderImproved = () => {
  const [token, setToken] = useState(
    "ZXJkMTNycm4zZndqZHM4cjUyNjBuNnEzcGQycWE2d3FrdWRyaGN6aDI2ZDk1N2MwZWR5emVybXNoZHMwazg.Wld4eWIyNWtMbU52YlEuYjNkMDc1NjUyOTNmZDU2ODRjOTdkMmI5NmViODYyZDEyNGZkNjk4Njc4ZjNmOTViMjUxNWVkMDcxNzhhMjdiNC44NjQwMC5lMzA.4b445f287663b868e269aa0532c9fd73acb37cfd45f46e33995777e68e5ecc15d97318d9af09c4102f9b40ecf347a75e2d2e81acbcc3c72ae32fcf659c2acd0e"
  );

  const [address, setAddress] = useState(
    "erd13rrn3fwjds8r5260n6q3pd2qa6wqkudrhczh26d957c0edyzermshds0k8"
  );
  const [body, setBody] = useState(
    "ZWxyb25kLmNvbQ.b3d07565293fd5684c97d2b96eb862d124fd698678f3f95b2515ed07178a27b4.86400.e30"
  );
  const [blockHash, setBlockHash] = useState(
    "b3d07565293fd5684c97d2b96eb862d124fd698678f3f95b2515ed07178a27b4"
  );
  const [extraInfo, setExtraInfo] = useState("");
  const [host, setHost] = useState("elrond.com");
  const [signature, setSignature] = useState(
    "4b445f287663b868e269aa0532c9fd73acb37cfd45f46e33995777e68e5ecc15d97318d9af09c4102f9b40ecf347a75e2d2e81acbcc3c72ae32fcf659c2acd0e"
  );
  const [ttl, setTtl] = useState("86400");
  const [isDecodedSelected, setIsDecodedSelected] = useState(true);

  useEffect(() => {
    tryDecode(token);
  }, [token]);

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
                <a href="/#" onClick={() => setIsDecodedSelected(true)}>
                  Encoded<small>paste a token here</small>
                </a>
              </div>
              <div
                className={"tab-link " + (!isDecodedSelected ? "current" : "")}
              >
                <a href="/#" onClick={() => setIsDecodedSelected(false)}>
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
                      <div className="CodeMirror-sizer custom-textarea">
                        <div style={{ position: "relative", top: "0px" }}>
                          <div className="CodeMirror-lines">
                            <div
                              style={{ position: "relative", outline: "none" }}
                            >
                              <pre className="CodeMirror-line">
                                <RichTextArea
                                  displayedText={token}
                                  onChangeFromParent={(token) => {
                                    setToken(token);
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
                          <div className="CodeMirror-sizer custom-textarea">
                            <div style={{ position: "relative", top: "0px" }}>
                              <div className="CodeMirror-lines">
                                <div
                                  style={{
                                    position: "relative",
                                    outline: "none",
                                  }}
                                >
                                  <pre
                                    className="CodeMirror-line address"
                                    style={{
                                      fontSize: constants.explanationFontSize,
                                      fontFamily: constants.fontFamily,
                                    }}
                                  >
                                    <ReadOnlyRichTextArea
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
                          <div className="CodeMirror-sizer custom-textarea">
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
                                      <ReadOnlyRichTextArea
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
                          <div className="CodeMirror-sizer custom-textarea">
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
                                    <ReadOnlyRichTextArea
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
                      type={TextTypes.BLOCKHASH}
                      text="BlockHash"
                    />
                    <div className="js-payload">
                      <div className="CodeMirror cm-s-default CodeMirror-wrap">
                        <div className="CodeMirror-scroll" tabIndex="-1">
                          <div className="CodeMirror-sizer custom-textarea">
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
                                      <ReadOnlyRichTextArea
                                        explanationText={blockHash}
                                        explanationType={TextTypes.BLOCKHASH}
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
                          <div className="CodeMirror-sizer custom-textarea">
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
                                      <ReadOnlyRichTextArea
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
                          <div className="CodeMirror-sizer custom-textarea">
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
                                      <ReadOnlyRichTextArea
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
                      type={TextTypes.EXTRAINFO}
                      text="Extra information"
                    />
                    <div className="js-payload">
                      <div className="CodeMirror cm-s-default CodeMirror-wrap">
                        <div className="CodeMirror-scroll" tabIndex="-1">
                          <div className="CodeMirror-sizer custom-textarea">
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
                                      <ReadOnlyRichTextArea
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
