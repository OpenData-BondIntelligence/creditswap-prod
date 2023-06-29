import React, { useEffect, useState } from 'react';
import {Button} from './Button';
import { ChatLine } from './ChatLine.js';


export default function Chat() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);

    const msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");

    fetch("https://gpt-node-app.vercel.app/chat", {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chats,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        msgs.push(data.output);
        setChats(msgs);
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="rounded-2xl border-zinc-100 bg-white lg:border lg:p-6">
      {chats.map(({ content, role }, index) => (
        <ChatLine key={index} role={role} content={content} />
      ))}

      {chats.length < 2 && (
        <span className="clear-both mx-auto flex flex-grow text-gray-600">
          Type a message to start the conversation
        </span>
      )}

      { isTyping && (
        <span className="clear-both mx-auto flex flex-grow text-gray-400">
          Typing...
        </span>
      )}

      <div className="clear-both mt-6 flex">
        <input
          type="text"
          aria-label="chat input"
          required
          className="min-w-0 text-black flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm"
          value={message}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              chat(e, message);
              setMessage('');
            }
          }}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Button
          type="submit"
          className="ml-4 flex-none"
          onClick={(e) => {
            chat(e, message);
            setMessage('');
          }}
        >
          Say
        </Button>
      </div>
    </div>
  );
}
