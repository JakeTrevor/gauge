import { useAuthState } from "react-firebase-hooks/auth";
import { Counter, Header, SignIn } from "./components";
import Wrapper from "./components/Wrapper";
import { auth } from "./firebase";

function App() {
  let [user, loading] = useAuthState(auth);

  if (loading)
    return (
      <Wrapper>
        <h1 className="font-bold">loading...</h1>
      </Wrapper>
    );

  return (
    <>
      {user ? (
        <>
          <Header />
          <Counter />
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
}

export default App;
