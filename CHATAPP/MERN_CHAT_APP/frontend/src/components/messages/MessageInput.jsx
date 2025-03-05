import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border text-sm rounded-lg block w-full p-2.5 bg-orange-200 border-gray-600 text-black placeholder-red-400"
          placeholder="Send a message"
          disabled={loading} // Disable input when loading
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center text-black hover:text-red-500 pe-3"
          disabled={loading || !message.trim()} // Disable button if loading or message is empty
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
