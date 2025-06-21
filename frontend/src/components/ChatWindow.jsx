import { useEffect, useRef } from 'react';

export function ChatWindow({ messages, username }) {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={chatContainerRef}
      className="bg-gray-50 p-4 rounded-lg shadow-md h-96 overflow-y-auto flex flex-col gap-3"
    >
      {messages.map((m, i) => (
        <div
          key={i}
          className={`flex items-center gap-2 p-3 rounded-md shadow-sm max-w-[80%] ${
            m.username === username
              ? 'self-end bg-blue-500 text-white'
              : 'self-start bg-white text-gray-800'
          }`}
        >
          <span className="font-semibold ">{m.username}:</span>
          <span>{m.message}</span>
        </div>
      ))}
    </div>
  );
}