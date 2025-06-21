import { useState } from "react";

export function MessageForm({ onSend }) {
  const [msg, setMsg] = useState('');
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md md:sticky md:top-4">
      <form onSubmit={e => { e.preventDefault(); onSend(msg); setMsg(''); }} className="flex gap-3">
        <input
          value={msg}
          onChange={e => setMsg(e.target.value)}
          required
          placeholder="Type a message"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
}