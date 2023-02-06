import { auth } from "../../../auth/firebaseAuth";
import React, { useEffect, useRef } from "react";

/**************************************************
 *
 * Message component
 *
 *************************************************/

const Message = ({ message }) => {
  // Creating a reference to the last message element
  const lastMessageRef = useRef(null);

  const timestamp = message.timestamp;
  let time = null;

  // Checking if the timestamp object is not null
  if (timestamp) {
    const date = timestamp.toDate();

    // Formating the Date object to show the time in the desired format
    time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  useEffect(() => {
    // Scroll to the last message as soon as the component mounts
    lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Displaying message sent by the current user differently */}
      {message.uid === auth.currentUser.uid ? (
        // Display message on the right side with blue background
        <div
          className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end"
          ref={lastMessageRef}
        >
          {/* displaying message content */}
          <div>
            <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
              <p className="text-sm">{message.text}</p>
            </div>
            <span className="text-[10px] text-gray-500 leading-none capitalize">
              {message.name.split(" ")[0]}{" "}
              <span className="tracking-wider font-sans">
                {" "}
                {time ? time : ""}
              </span>
            </span>
          </div>
          <img
            src={message.photoURL}
            className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
            alt="user"
          />
        </div>
      ) : (
        // Display message on the left side with gray background
        <div
          className="flex w-full mt-2 space-x-3 max-w-xs"
          ref={lastMessageRef}
        >
          <img
            src={message.photoURL}
            className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
            alt="user"
          />
          {/* displaying message content */}
          <div>
            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
              <p className="text-sm">{message.text}</p>
            </div>
            <span className="text-[10px] text-gray-500 leading-none">
              {message.name.split(" ")[0]}{" "}
              <span className="tracking-wide"> {time ? time : ""}</span>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Message;
