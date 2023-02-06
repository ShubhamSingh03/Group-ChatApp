import React, { useState } from "react";
import { auth, database } from "../../../auth/firebaseAuth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Picker from "@emoji-mart/react";
import InputForm from "./InputForm";

/******************************************
 *
 *  Component for sending messages
 *
 *******************************************/

const SendMessage = () => {
  // State for holding the input value
  const [input, setInput] = useState("");

  // State for controlling the visibility of emoji picker
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Function for sending the message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      return alert("Please enter a message");
    }

    // Get the current user information
    const { uid, displayName, photoURL } = auth.currentUser;

    // Add the message to the firestore database
    await addDoc(collection(database, "messages"), {
      text: input,
      name: displayName,
      uid,
      photoURL,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  // Function for adding emoji to the input
  const addEmoji = (emoji) => {
    setInput(input + emoji.native);
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <>
      {/* Rendering the input form component */}
      <InputForm
        input={input}
        setInput={setInput}
        showEmojiPicker={showEmojiPicker}
        setShowEmojiPicker={setShowEmojiPicker}
        sendMessage={sendMessage}
      />

      {/* Rendering the emoji picker */}
      <span>
        {showEmojiPicker && (
          <div className="fixed bottom-6 right-8 sm:right-0 z-50 m-0 sm:m-6 sm:bottom-0">
            <Picker
              title="Pick an emoji"
              emoji="point_up"
              perLine={7}
              theme="light"
              onEmojiSelect={addEmoji}
            />
          </div>
        )}
      </span>
    </>
  );
};

export default SendMessage;
