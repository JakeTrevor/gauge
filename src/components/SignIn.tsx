import type { FC } from "react";
import { signIn } from "../firebase";
import Button from "./Button";
import Wrapper from "./Wrapper";

let SignIn: FC = () => {
  return (
    <Wrapper>
      <h1 className="text-blue-300 text-xl underline mb-2">
        You aren't signed in
      </h1>
      <h2>
        to continue, <Button onClick={signIn}>sign in with google</Button>
      </h2>
    </Wrapper>
  );
};

export default SignIn;
