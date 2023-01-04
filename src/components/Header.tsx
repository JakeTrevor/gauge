import type { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOut } from "../firebase";
import Button from "./Button";
import Tooltip from "./Tooltip";

let Header: FC = () => {
  let [user] = useAuthState(auth);

  if (!user) return <></>;

  return (
    <header className="flex flex-row justify-between items-center w-full bg-white drop-shadow-lg fixed top-0 p-3">
      <Tooltip tooltip={user.displayName || ""}>
        <img className="rounded-full m-0 w-16" src={user.photoURL || ""} />
      </Tooltip>
      <h1 className="font-bold text-2xl">Gague</h1>
      <Button onClick={signOut}>sign out</Button>
    </header>
  );
};

export default Header;
