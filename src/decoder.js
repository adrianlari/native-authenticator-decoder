//import { NativeAuthClient } from "@elrondnetwork/native-auth";
import { NativeAuthServer, NativeAuthClient } from "@elrondnetwork/native-auth";
import { SignableMessage } from "@elrondnetwork/erdjs/out";
import { UserSigner } from "@elrondnetwork/erdjs-walletcore/out";

const message = new SignableMessage({
  message: Buffer.from("native auth testing", "utf8"),
});
const PEM_KEY = `-----BEGIN PRIVATE KEY for erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p-----
  ODY1NmI0ZjMzYTRjOTY0MGI3MTFiY2E4NDUzODNiMDZiNjczMjAzNjk2ZjYxYjMy
  N2E5MDY3ODdlNWExODg1NjA0ZWNhNjZmODAyMzkyMDViNjc2ZGY3OGMwZWNmZjgz
  Y2Q3N2JlYzczNjc4MWU3NTNhYzZmNTg2ZDQ2NjM5NDA=
  -----END PRIVATE KEY for erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p-----`;

const decode = async (accessToken) => {
  if (!accessToken) return;
  const client = new NativeAuthClient();

  const init = await client.initialize();
  const address =
    "erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p";

  const server = new NativeAuthServer();
  let result;
  let validate;

  const pem = UserSigner.fromPem(PEM_KEY);
  // console.log(accessToken)
  await pem.sign(message);
  const signature = message.getSignature();
  const accessTokenTest = client.getToken(address, init, signature.hex());
  console.log({ accessTokenTest });

  try {
    result = server.decode(accessToken);
    validate = await server.validate(accessTokenTest);
  } catch (ex) {
    console.log(ex);
  }
  //console.log(accessToken.split("."));
  // decode(accessToken)
  console.log({ validate });

  return result;
};

export default decode;
