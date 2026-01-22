import { useState } from "react";
import { Send } from "lucide-react";

const Conversations = ({ conversations: initialData }) => {
  const [list, setList] = useState(
    initialData.list.map((c) => ({
      ...c,
      chatHistory: [{ text: c.message, isUser: false }],
    })),
  );

  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const handleSend = (id) => {
    if (!replyText.trim()) return;

    setList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            chatHistory: [
              ...item.chatHistory,
              { text: replyText, isUser: true },
            ],
          };
        }
        return item;
      }),
    );
    setReplyText("");
    setReplyingTo(null);
  };

  return (
    <div className="bg-white rounded-3xl p-6 h-full shadow-sm border border-gray-50">
      <h3 className="text-[18px] font-bold text-gray-800 mb-7">
        {initialData.title || ""}
      </h3>

      <div className="space-y-6">
        {list.map((conversation) => (
          <div key={conversation.id} className="flex flex-col">
            <div className="flex gap-4 items-center">
              <img
                src={conversation.avatar}
                alt={conversation.name}
                className="w-12 h-12 rounded-2xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] font-bold text-gray-700">
                  {conversation.name}
                </h4>
                {replyingTo !== conversation.id && (
                  <p className="text-[12px] text-gray-500 truncate">
                    {conversation.chatHistory[
                      conversation.chatHistory.length - 1
                    ].isUser
                      ? "You: "
                      : ""}
                    {
                      conversation.chatHistory[
                        conversation.chatHistory.length - 1
                      ].text
                    }
                  </p>
                )}
              </div>
              <button
                onClick={() =>
                  setReplyingTo(
                    replyingTo === conversation.id ? null : conversation.id,
                  )
                }
                className="text-[10px] text-teal-500 font-bold hover:text-teal-600 flex-shrink-0 tracking-wider"
              >
                {replyingTo === conversation.id ? "CANCEL" : conversation.time}
              </button>
            </div>

            {replyingTo === conversation.id && (
              <div className="ml-16 space-y-1 animate-in slide-in-from-top-2 duration-200">
                <div className="flex flex-col gap-2 max-h-[150px] overflow-y-auto no-scrollbar pb-2">
                  {conversation.chatHistory.map((chat, idx) => (
                    <div
                      key={idx}
                      className={`max-w-[85%] text-[11px] py-1 px-3 rounded-xl ${
                        chat.isUser
                          ? "bg-teal-500 text-white self-end rounded-tr-none"
                          : "bg-gray-100 text-gray-600 self-start rounded-tl-none"
                      }`}
                    >
                      <span className="font-medium">
                        {chat.isUser ? `You: ${chat.text}` : chat.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    autoFocus
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleSend(conversation.id)
                    }
                    placeholder="Write a reply..."
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-[11px] focus:ring-1 focus:ring-teal-400 outline-none"
                  />
                  <button
                    onClick={() => handleSend(conversation.id)}
                    className="absolute right-2 text-teal-500 hover:scale-110 transition-transform"
                  >
                    <Send
                      size={14}
                      fill={replyText.trim() ? "currentColor" : "none"}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conversations;
