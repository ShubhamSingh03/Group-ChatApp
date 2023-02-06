import { auth } from "../../auth/firebaseAuth";
import toast, { Toaster } from "react-hot-toast";
import { signOut } from "firebase/auth";

/***********************************
 *
 * SignOut component
 *
 **********************************/

const SignOut = () => {
  const logOut = () => {
    signOut(auth);
    toast.success("Logout successfully!");
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <button
        onClick={logOut}
        className="inline-block rounded bg-buttonColor px-8 py-3 text-sm font-medium text-buttonTextcolor transition hover:scale-105 hover:shadow-buttonShadow focus:outline-none focus:ring active:bg-buttonColor"
      >
        Log Out
      </button>
    </>
  );
};

export default SignOut;
