import { useState } from "react";

export function UserForm({ onSubmit, userInputRef }) {
  const [name, setName] = useState("");
  return (
    <div className="h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Join the Chat
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit(name);
          }}
          className="space-y-4"
        >
          <input
            ref={userInputRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter username"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
}
