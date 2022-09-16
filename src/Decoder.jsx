import RichTextArea from "./RichTextArea";
import { TextTypes } from "./TextTypes.ts";
import Filler from "./components/Filler.tsx";
import CodeMirrorLine from "./components/CodeMirrorLine.tsx";
import "./jwt.css";

import HeaderTextLine from "./components/HeaderTextLine.tsx";

const Decoder = () => {
  // const [address, setAddress] = useState("");
  // const [blockHash, setBlockHash] = useState("");
  // const [extraInfo, setExtraInfo] = useState("");
  // const [host, setHost] = useState("");
  // const [signature, setSignature] = useState("");
  // const [ttl, setTtl] = useState("");

  // const [isValidToken, setIsValidToken] = useState(true);

  // const accessToken = "ZXJkMTNycm4zZndqZHM4cjUyNjBuNnEzcGQycWE2d3FrdWRyaGN6aDI2ZDk1N2MwZWR5emVybXNoZHMwazg.Wld4eWIyNWtMbU52YlEuYjNkMDc1NjUyOTNmZDU2ODRjOTdkMmI5NmViODYyZDEyNGZkNjk4Njc4ZjNmOTViMjUxNWVkMDcxNzhhMjdiNC44NjQwMC5lMzA.4b445f287663b868e269aa0532c9fd73acb37cfd45f46e33995777e68e5ecc15d97318d9af09c4102f9b40ecf347a75e2d2e81acbcc3c72ae32fcf659c2acd0e"

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
                  <div className="editor-warning warning js-editor-warnings hidden"></div>
                  <div className="CodeMirror cm-s-night CodeMirror-wrap CodeMirror-focused">
                    <div
                      style={{
                        overflow: "hidden",
                        position: "relative",
                        width: "300px",
                        height: "0px",
                        top: "4px",
                        left: "4px",
                      }}
                    >
                      {/* <textarea
                        value={token}
                        onChange={getToken}
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        tabIndex="10"
                        style={{
                          position: "absolute",
                          bottom: "-1em",
                          padding: "0px",
                          width: "1000px",
                          height: "1em",
                          outline: "none",
                        }}
                      ></textarea> */}
                    </div>
                    <Filler />

                    <div className="CodeMirror-scroll" tabIndex="-1">
                      <div
                        className="CodeMirror-sizer"
                        style={{
                          marginLeft: "0px",
                          marginBottom: "0px",
                          borderRightWidth: "50px",
                          minHeight: "158px",
                          paddingRight: "0px",
                          paddingBottom: "0px",
                        }}
                      >
                        <div style={{ position: "relative", top: "0px" }}>
                          <div className="CodeMirror-lines" role="presentation">
                            <div
                              role="presentation"
                              style={{ position: "relative", outline: "none" }}
                            >
                              <div className="CodeMirror-measure">
                                <pre className="CodeMirror-line-like">
                                  <span>xxxxxxxxxx</span>
                                </pre>
                              </div>
                              <div className="CodeMirror-measure"></div>
                              <div
                                style={{ position: "relative", zIndex: "1" }}
                              ></div>

                              <div
                                className="CodeMirror-code"
                                role="presentation"
                              >
                                <pre
                                  className="CodeMirror-line"
                                  role="presentation"
                                >
                                  <RichTextArea />
                                  {/* <span className="cm-jwt-header">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span> */}
                                  {/* <TextRun
                                      type={TextTypes.HEADER}
                                      text={token}
                                    />
                                    <TextRun type={TextTypes.DOT} text="." />
                                    <TextRun
                                      type={TextTypes.PAYLOAD}
                                      text="eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"
                                    />
                                    <TextRun type={TextTypes.DOT} text="." />
                                    <TextRun
                                      type={TextTypes.SIGNATURE}
                                      text="V7DUJfAa1Em69Ad-1aLQXmmdPhI1UnK4h0zj8fC-3XY"
                                    /> */}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          height: "50px",
                          width: "1px",
                          borderBottom: "0px solid transparent",
                          top: "158px",
                        }}
                      ></div>
                      <div
                        className="CodeMirror-gutters"
                        style={{ display: "none", height: "208px" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-content" id="decoded-jwt" heap-ignore="true">
                <div className="output">
                  <div className="jwt-explained jwt-header">
                    <HeaderTextLine
                      type={TextTypes.HEADER}
                      text="ALGORITHM &amp; TOKEN TYPE"
                    />
                    <div className="js-header">
                      <div className="CodeMirror cm-s-default CodeMirror-wrap">
                        <div
                          style={{
                            overflow: "hidden",
                            position: "relative",
                            width: "3px",
                            height: "0px",
                            top: "0px",
                            left: "24px",
                          }}
                        >
                          <textarea
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            tabIndex="0"
                            style={{
                              position: "absolute",
                              bottom: "-1em",
                              padding: "0px",
                              width: "1000px",
                              height: "1em",
                              outline: "none",
                            }}
                          ></textarea>
                        </div>
                        <Filler />
                        <div className="CodeMirror-scroll" tabIndex="-1">
                          <div
                            className="CodeMirror-sizer"
                            style={{
                              marginLeft: "0px",
                              marginBottom: "0px",
                              borderRightWidth: "50px",
                              minHeight: "92px",
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
                                  <div className="CodeMirror-cursors">
                                    <div
                                      className="CodeMirror-cursor"
                                      style={{
                                        left: "4px",
                                        top: "0px",
                                        height: "21px",
                                      }}
                                    >
                                      &nbsp;
                                    </div>
                                  </div>
                                  <div className="CodeMirror-code">
                                    <CodeMirrorLine text={`{`} />
                                    <CodeMirrorLine
                                      text={`    "alg": "HS256",`}
                                    />
                                    <CodeMirrorLine text={`    "typ": "JWT"`} />
                                    <CodeMirrorLine text={`}`} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              height: "50px",
                              width: "1px",
                              borderBottom: "0px solid transparent",
                              top: "92px",
                            }}
                          ></div>
                          <div
                            className="CodeMirror-gutters"
                            style={{ display: "none", height: "142px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jwt-explained jwt-payload">
                    <HeaderTextLine type={TextTypes.PAYLOAD} text="DATA" />
                    <div className="js-payload">
                      <div className="CodeMirror cm-s-default CodeMirror-wrap">
                        <div
                          style={{
                            overflow: "hidden",
                            position: "relative",
                            width: "3px",
                            height: "0px",
                            top: "24px",
                            left: "24px",
                          }}
                        >
                          <textarea
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            tabIndex="0"
                            style={{
                              position: "absolute",
                              bottom: "-1em",
                              padding: "0px",
                              width: "1000px",
                              height: "1em",
                              outline: "none",
                            }}
                          ></textarea>
                        </div>
                        <Filler />
                        <div className="CodeMirror-scroll" tabIndex="-1">
                          <div
                            className="CodeMirror-sizer"
                            style={{
                              marginLeft: "0px",
                              marginBottom: "0px",
                              borderRightWidth: "50px",
                              minHeight: "113px",
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
                                  <div
                                    style={{
                                      position: "relative",
                                      zIndex: "1",
                                    }}
                                  ></div>
                                  <div className="CodeMirror-cursors">
                                    <div
                                      className="CodeMirror-cursor"
                                      style={{
                                        left: "4px",
                                        top: "0px",
                                        height: "21px",
                                      }}
                                    >
                                      &nbsp;
                                    </div>
                                  </div>
                                  <div className="CodeMirror-code">
                                    <CodeMirrorLine text="{" />
                                    <CodeMirrorLine
                                      text='   "sub": "1234567890",'
                                      title="Subject (whom the token refers to)"
                                    />
                                    <CodeMirrorLine text='   "name": "John Doe",' />
                                    <CodeMirrorLine
                                      text='   "iat": 1516239022'
                                      title="Thu Jan 18 2018 03:30:22 GMT+0200 (Eastern European Standard Time)"
                                    />
                                    <CodeMirrorLine text="}" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              height: "50px",
                              width: "1px",
                              borderBottom: "0px solid transparent",
                              top: "113px",
                            }}
                          ></div>
                          <div
                            className="CodeMirror-gutters"
                            style={{ display: "none", height: "163px" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jwt-explained jwt-signature">
                    <HeaderTextLine type={TextTypes.SIGNATURE} />

                    <pre className="pre-encode HS256">
                      <span
                        id="hmacsha-text"
                        style={{
                          wordWrap: "break-word",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        HMACSHA256 ( base64UrlEncode(header) + "." +
                        base64UrlEncode(payload), )
                        <span className="is-base64-encoded-label">
                          <label htmlFor="is-base64-encoded">
                            secret base64 encoded
                          </label>
                        </span>
                      </span>
                    </pre>
                    <pre
                      className="pre-encode RS256"
                      style={{ display: "none" }}
                    >
                      <span id="rsasha-text">RSASHA256</span>(
                      base64UrlEncode(header) + "." + base64UrlEncode(payload),
                      <textarea
                        rows="4"
                        name="public-key"
                        placeholder="Public Key in SPKI, PKCS #1, X.509 Certificate, or JWK string format."
                      ></textarea>
                      ,
                      <textarea
                        rows="5"
                        name="private-key"
                        placeholder="Private Key in PKCS #8, PKCS #1, or JWK string format. The key never leaves your browser."
                      ></textarea>
                      )
                    </pre>
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
};

export default Decoder;
