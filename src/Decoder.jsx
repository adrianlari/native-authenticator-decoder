import { useEffect, useState } from "react";
import functie_test from "./test";
import "./Decoder.css"
import { MdError } from "react-icons/md"

const Decoder = () => {

    const [token, setToken] = useState("");

    const [address, setAddress] = useState("");
    const [blockHash, setBlockHash] = useState("");
    const [body, setBody] = useState("");
    const [host, setHost] = useState("");
    const [signature, setSignature] = useState("");
    const [ttl, setTtl] = useState("");

    const [isValidToken, setIsValidToken] = useState(true);
    //  const accessToken = "ZXJkMTNycm4zZndqZHM4cjUyNjBuNnEzcGQycWE2d3FrdWRyaGN6aDI2ZDk1N2MwZWR5emVybXNoZHMwazg.Wld4eWIyNWtMbU52YlEuYjNkMDc1NjUyOTNmZDU2ODRjOTdkMmI5NmViODYyZDEyNGZkNjk4Njc4ZjNmOTViMjUxNWVkMDcxNzhhMjdiNC44NjQwMC5lMzA.4b445f287663b868e269aa0532c9fd73acb37cfd45f46e33995777e68e5ecc15d97318d9af09c4102f9b40ecf347a75e2d2e81acbcc3c72ae32fcf659c2acd0e"

    const getToken = (e) => {
        setToken(e.target.value)
    }

    useEffect(() => {
        console.log({ token })

        const getDecoded = async (token) => {
            if (!token) return;

            const decoded = await functie_test(token);
            console.log({ decoded })
            if (!decoded) {
                setAddress("");
                setBlockHash("");
                setBody("");
                setHost("");
                setSignature("");
                setTtl("");

                return;
            }

            setAddress(decoded.address);
            setBlockHash(decoded.blockHash);
            setBody(decoded.body);
            setHost(decoded.host);
            setSignature(decoded.signature);
            setTtl(decoded.ttl);

            return decoded;
        }

        getDecoded(token)

    }, [token])

    // return <div>
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
    //         <input value={body} readOnly />
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
    // </div>
    return (
        <div className="tab">
            <div className="tab-nav">
                <div className="tab-link">
                    Encoded
                    <span>
                        <MdError />
                        Invalid token
                    </span>
                </div>
                <div className="tab-link">
                    Decoded
                </div>
            </div>
            <div className="tab-content">
                <div className="tab-content-box">
                    <div className="box-input">
                        {/* <div style={{ background: "red", height: "100%" }}>

                        </div> */}
                        <div style={{ height: "100%" }}>
                            <textarea value={token} onChange={getToken} style={{ height: "100%" }}></textarea>
                        </div>
                    </div>
                </div>
                <div className="tab-content-box">
                    <div className="box-output">
                        <div className="token-address">
                            <p className="text" >Address: </p>
                            <div className="decoded-address">
                                <div className="decoded-text">
                                    <textarea value={address} readOnly ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="token-blockhash">
                            <p className="text">Blockhash: </p>
                            <div className="decoded-blockhash">
                                <div className="decoded-text">
                                    <textarea value={blockHash} readOnly></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="token-body">
                            <p className="text">Body:</p>
                            <div className="decoded-body">
                                <div className="decoded-text">
                                    <textarea value={body} readOnly></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="token-host">
                            <p className="text">Host:</p>
                            <div className="decoded-host">
                                <div className="decoded-text">
                                    <textarea value={host} readOnly></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="token-signature" >
                            <p className="text">Signature:</p>
                            <div className="decoded-signature">
                                <div className="decoded-text">
                                    <textarea value={signature} readOnly></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="token-ttl" style={{ marginTop: "auto" }}>
                            <p className="text">Time to live:</p>
                            <div className="decoded-ttl">
                                <div className="decoded-text">
                                    <textarea value={ttl} readOnly></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Decoder;