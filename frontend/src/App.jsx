import { useState, useRef, useEffect } from "react";
import { UserForm } from "./components/UserForm";
import { ChatWindow } from "./components/ChatWindow";
import { MessageForm } from "./components/MessageForm";
import initWebSocket from "./utils/websocket";

function App() {
  const [ws, setWs] = useState(null);
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);

  const userInputRef = useRef(null);

  // Load username from localStorage on mount
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  useEffect(() => {
    if (username && !ws) {
      const socket = initWebSocket((msg) => {
        if (msg.type === "history") {
          setMessages(msg.messages);
        } else if (msg.type === "message") {
          setMessages((prev) => [...prev, msg]);
        }
      });

      socket.onopen = () => {
        socket.send(JSON.stringify({ type: "join", username }));
      };

      setWs(socket);
    }
  }, [username]);

  const sendMessage = (message) => {
    if (ws) {
      ws.send(JSON.stringify({ type: "message", message }));
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("username");
    setWs(null);
    setUsername("");
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white py-4 shadow-md flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">ShareRoom Chat App</h1>
        {username ? (
          <div className="flex items-center gap-4">
            <span className="text-sm">👤 {username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => userInputRef.current?.focus()}
            className="bg-green-500 hover:bg-green-600 cursor-pointer text-white px-3 py-1 rounded"
          >
            Add User
          </button>
        )}
      </header>
      <main className="p-3">
        {!username ? (
          <UserForm onSubmit={setUsername} userInputRef={userInputRef} />
        ) : (
          <div className="flex max-w-4xl mx-auto flex-col flex-1 gap-4">
            <ChatWindow messages={messages} username={username} />
            <MessageForm onSend={sendMessage} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
