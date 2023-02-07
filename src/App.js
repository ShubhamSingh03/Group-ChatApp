import { auth } from "./auth/firebaseAuth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";

// components
import Chat from "./components/chat/Chat";
import SignIn from "./components/signIn/SignIn";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="h-screen  bg-appBg">
      {user ? <Chat /> : <SignIn />}
      <div className="text-xs fixed bottom-0 left-4 text-white font-semibold sm:text-sm">
        Coded by:{" "}
        <a href="https://shubhambhoj.in" target={"_blank"} rel="noreferrer">
          Shubham Singh
        </a>
      </div>
    </div>
  );
}

export default App;
