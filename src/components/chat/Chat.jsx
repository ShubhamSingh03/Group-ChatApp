import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { database } from "../../auth/firebaseAuth";
import { auth } from "../../auth/firebaseAuth";

// components
import Message from "./message/Message";
import SendMessage from "./message/SendMessage";
import SignOut from "../signIn/SignOut";

/*********************************************
 *
 * Chat component which displays messages,
 * user info and send message form
 *
 ********************************************/
const Chat = () => {
  // State to store messages
  const [messages, setMessages] = useState([]);

  // Effect to fetch messages from firestore and set in the state
  useEffect(() => {
    const q = query(collection(database, "messages"), orderBy("timestamp"));

    // Subscribe to real-time updates of messages collection
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    // Unsubscribe from real-time updates on unmount
    return () => unsubscribe();
  }, []);

  return (
    <>
      {/* Main container for chat */}
      <div className="flex flex-col items-center justify-center w-screen min-h-screen text-gray-800 p-4">
        {/* Chat container */}
        <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
          {/* User info container */}
          <div className="bg-gradient-to-b from-[#0000000d] to-[#edf1f4] shadow-infoCardshadow">
            <div className="py-1 px-3 flex flex-col space-y-2 justify-between items-center sm:py-2 sm:flex-row">
              {/* User avatar and name */}
              <div className="flex items-center">
                <div>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={auth.currentUser.photoURL}
                    alt="current-user"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-grey-darkest">
                    Welcome,{" "}
                    <span className="font-bold">
                      {auth.currentUser.displayName}
                    </span>
                  </p>
                  <p className="text-grey-darker text-xs">
                    {auth.currentUser.emailVerified
                      ? "Google Verified ✔️"
                      : " Not Verified ❌"}
                  </p>
                </div>
              </div>

              {/* Sign Out button */}
              <div className="flex">
                <SignOut />
              </div>
            </div>
            <div className="flex justify-center mb-0 sm:mt-4">
              <div
                className="rounded py-2 px-4"
                style={{ backgroundColor: "#FCF4CB" }}
              >
                <p className="text-xs text-center">
                  Please don't post spam or derogatory messages and follow
                  common social ethics
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
            {/* Map over the messages array and render each message as a Message component */}
            {messages &&
              messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
          </div>

          {/* Rendering the SendMessage component */}
          <SendMessage />
        </div>
      </div>
    </>
  );
};

export default Chat;
