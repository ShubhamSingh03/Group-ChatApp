import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "../../auth/firebaseAuth";
import toast, { Toaster } from "react-hot-toast";

// images
import loginPage from "../../images/loginPage.png";
import icon from "../../images/icon.png";

/**************************************************
 *
 * SignIn component with Google and Github options
 *
 *************************************************/

const SignIn = () => {
  // Handle Google sign in process
  const googleSignIn = () => {
    // Create a GoogleAuthProvider instance
    const provider = new GoogleAuthProvider();

    // signInWithPopup to sign in with Google
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Login Successfully!");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/account-exists-with-different-credential": {
            toast.error("Account exists with different credential!");
            break;
          }
          default: {
            toast.error("Something went wrong!");
          }
        }
      });
  };

  // Handle Github sign in process
  const githubSignIn = () => {
    // Create a GithubAuthProvider instance
    const provider = new GithubAuthProvider();

    // signInWithPopup to sign in with Github
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Login Successfully!");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/account-exists-with-different-credential": {
            toast.error("Account exists with different credential!");
            break;
          }
          default: {
            toast.error("Something went wrong!");
          }
        }
      });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            {/* Left half of signIn component */}
            <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
              <img src={loginPage} alt="main" />
            </div>

            {/* Right half of signIn component */}
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="space-y-6">
                <img
                  src={icon}
                  loading="lazy"
                  className="w-10"
                  alt="chat logo"
                />
                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                  Sign in to unlock the Group Chat
                </h2>
              </div>
              <div className="mt-16 grid space-y-4 md:mt-20">
                {/* Google signIn btn component */}
                <button
                  onClick={googleSignIn}
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300
                   hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/archive/5/53/20210618182605%21Google_%22G%22_Logo.svg"
                      className="absolute left-0 w-5"
                      alt="google logo"
                    />
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Google
                    </span>
                  </div>
                </button>

                {/* Github signIn btn component */}
                <button
                  onClick={githubSignIn}
                  className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                  hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                >
                  <div className="relative flex items-center space-x-4 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="absolute left-0 w-5 text-gray-700"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                      Continue with Github
                    </span>
                  </div>
                </button>
              </div>
              <div className="mt-20 space-y-4 text-gray-600 text-center sm:-mb-4">
                <p className="text-xs">
                  By proceeding, you agree to{" "}
                  <span className="underline">
                    not post spam or derogatory messages{" "}
                  </span>{" "}
                  and not{" "}
                  <span className="underline">
                    violate the common social ethics
                  </span>
                  .
                </p>
                <p className="text-xs">
                  This chat-app is built with react.js and firebase (auth &
                  firestore)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
