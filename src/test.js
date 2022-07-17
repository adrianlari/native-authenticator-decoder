//import { NativeAuthClient } from "@elrondnetwork/native-auth";
import { NativeAuthServer } from "@elrondnetwork/native-auth";


const functie_test = async (accessToken) => {
    if (!accessToken) return;
    //const client = new NativeAuthClient();
    //const init = await client.initialize()
    //const address = "erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p";

    //const accessToken = client.getToken(address, init, signature);

    const server = new NativeAuthServer();
    let result;
    console.log(accessToken)
    try {
        result = server.decode(accessToken);
        console.log({ result })
    }
    catch {
        return null;
    }
    //console.log(accessToken.split("."));
    // decode(accessToken)

    return result;
}

export default functie_test;