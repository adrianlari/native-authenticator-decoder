import { useState } from "react";
import RichTextArea from "../RichTextArea.jsx";
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

  const tryDecode = async (token) => {
    console.log(token);
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
              <div className="tab-link current">
                <a href="#encoded-jwt">
                  Encoded<small>paste a token here</small>
                </a>
              </div>
              <div className="tab-link">
                <a href="#decoded-jwt">
                  Decoded<small>edit the payload and secret</small>
                </a>
              </div>
            </div>
            <div className="tab-content">
              <div className="box-content current" id="encoded-jwt">
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

              <div className="box-content" id="decoded-jwt" heap-ignore="true">
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

  // return (
  //     <div classNameName="tab">
  //         <div classNameName="tab-nav">
  //             <div classNameName="tab-link">
  //                 Encoded
  //                 <span style={{ alignItems: "center", margin: "3px", padding: "3px", left: "20%", position: "absolute" }}>
  //                     {!isValidToken ? <span>
  //                         <MdError color="red" />
  //                         Invalid token
  //                     </span> : null}
  //                 </span>
  //             </div>
  //             <div classNameName="tab-link">
  //                 Decoded
  //             </div>
  //         </div>
  //         <div classNameName="tab-content">
  //             <div classNameName="tab-content-box">
  //                 <div classNameName="box-input">
  //                     {/* <div style={{ background: "red", height: "100%" }}>

  //                     </div> */}
  //                     <div style={{ height: "100%" }}>
  //                         <textarea value={token} onChange={getToken} style={{ height: "100%" }}></textarea>
  //                     </div>
  //                 </div>
  //             </div>
  //             <div classNameName="tab-content-box">
  //                 <div classNameName="box-output">
  //                     <div classNameName="token-address">
  //                         <p classNameName="text" >Address: </p>
  //                         <div classNameName="decoded-address">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={address} readOnly ></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div classNameName="token-blockhash">
  //                         <p classNameName="text">Blockhash: </p>
  //                         <div classNameName="decoded-blockhash">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={blockHash} readOnly></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div classNameName="token-extra-info">
  //                         <p classNameName="text">Extra Info:</p>
  //                         <div classNameName="decoded-extra-info">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={extraInfo} readOnly></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div classNameName="token-host">
  //                         <p classNameName="text">Host:</p>
  //                         <div classNameName="decoded-host">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={host} readOnly></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div classNameName="token-signature" >
  //                         <p classNameName="text">Signature:</p>
  //                         <div classNameName="decoded-signature">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={signature} readOnly></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div classNameName="token-ttl" style={{ marginTop: "auto" }}>
  //                         <p classNameName="text">Time to live:</p>
  //                         <div classNameName="decoded-ttl">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={ttl} readOnly></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  //     )

  // useEffect(() => {
  //     console.log({ token })

  //     const getDecoded = async (token) => {
  //         if (!token) { setIsValidToken(true); return; }

  //         const decoded = await functie_test(token);
  //         console.log({ decoded })
  //         if (!decoded) {
  //             setAddress("");
  //             setBlockHash("");
  //             setExtraInfo("");
  //             setHost("");
  //             setSignature("");
  //             setTtl("");

  //             setIsValidToken(false)

  //             return;
  //         }
  //         setIsValidToken(true)
  //         setAddress(decoded.address);
  //         setBlockHash(decoded.blockHash);
  //         setExtraInfo(decoded.extraInfo);
  //         setHost(decoded.host);
  //         setSignature(decoded.signature);
  //         setTtl(decoded.ttl);

  //         return decoded;
  //     }

  //     getDecoded(token)

  // }, [token])

  // return (<div>
  //     <div>
  //         <textarea value={token} onChange={getToken} />
  //     </div>
  //     <div>
  //         <input value={address} readOnly />
  //     </div>
  //     <div>
  //         <input value={blockHash} readOnly />
  //     </div>
  //     <div>
  //         <input value={extraInfo} readOnly />
  //     </div>
  //     <div>
  //         <input value={host} readOnly />
  //     </div>
  //     <div>
  //         <input value={signature} readOnly />
  //     </div>
  //     <div>
  //         <input value={ttl} readOnly />
  //     </div>
  // </div>)

  // return (
  //     <div classNameName="tab">
  //         <div classNameName="tab-nav">
  //             <div classNameName="tab-link">
  //                 Encoded
  //                 <span style={{ alignItems: "center", margin: "3px", padding: "3px", left: "20%", position: "absolute" }}>
  //                     {!isValidToken ? <span>
  //                         <MdError color="red" />
  //                         Invalid token
  //                     </span> : null}
  //                 </span>
  //             </div>
  //             <div classNameName="tab-link">
  //                 Decoded
  //             </div>
  //         </div>
  //         <div classNameName="tab-content">
  //             <div classNameName="tab-content-box">
  //                 <div classNameName="box-input">
  //                     {/* <div style={{ background: "red", height: "100%" }}>

  //                     </div> */}
  //                     <div style={{ height: "100%" }}>
  //                         <textarea value={token} onChange={getToken} style={{ height: "100%" }}></textarea>
  //                     </div>
  //                 </div>
  //             </div>
  //             <div classNameName="tab-content-box">
  //                 <div classNameName="box-output">
  //                     <div classNameName="token-address">
  //                         <p classNameName="text" >Address: </p>
  //                         <div classNameName="decoded-address">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={address} readOnly ></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div classNameName="token-blockhash">
  //                         <p classNameName="text">Blockhash: </p>
  //                         <div classNameName="decoded-blockhash">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={blockHash} readOnly></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div classNameName="token-extra-info">
  //                         <p classNameName="text">Extra Info:</p>
  //                         <div classNameName="decoded-extra-info">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={extraInfo} readOnly></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div classNameName="token-host">
  //                         <p classNameName="text">Host:</p>
  //                         <div classNameName="decoded-host">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={host} readOnly></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div classNameName="token-signature" >
  //                         <p classNameName="text">Signature:</p>
  //                         <div classNameName="decoded-signature">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={signature} readOnly></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div classNameName="token-ttl" style={{ marginTop: "auto" }}>
  //                         <p classNameName="text">Time to live:</p>
  //                         <div classNameName="decoded-ttl">
  //                             <div classNameName="decoded-text">
  //                                 <textarea value={ttl} readOnly></textarea>
  //                             </div>
  //                         </div>
  //                     </div>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  //     )
};

export default DecoderImproved;
