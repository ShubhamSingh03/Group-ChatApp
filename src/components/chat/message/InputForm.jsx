/**************************************************
 *
 * InputForm component for getting data
 *
 *************************************************/

const InputForm = ({
  input,
  setInput,
  showEmojiPicker,
  setShowEmojiPicker,
  sendMessage,
}) => {
  return (
    <form onSubmit={sendMessage} className="">
      <div className="write bg-white shadow flex rounded-lg">
        <div className="flex-3 flex content-center items-center text-center p-4 pr-0">
          <span
            className="block text-center text-gray-400 hover:text-gray-800 cursor-pointer"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <svg
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </span>
        </div>
        <div className="flex-1">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="message"
            className="w-full block outline-none py-4 px-4 bg-transparent"
            rows="1"
            maxLength={200}
            placeholder="Type a message..."
            autoFocus
          />
        </div>
        <div className="flex-2 w-32 p-2 flex content-center items-center">
          <div className="flex-1 text-center">
            <span className="text-gray-400 hover:text-gray-800"></span>
          </div>
          <div className="flex-1">
            <button
              type="submit"
              className="bg-buttonColor w-10 h-10 rounded-full inline-block hover:opacity-80"
            >
              <span title="Send" className="inline-block text-white">
                <svg
                  className="w-4 h-4 transform rotate-45 -mt-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InputForm;
