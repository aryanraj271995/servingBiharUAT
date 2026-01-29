import { useState } from "react";
import "./BhaiyaGPT.css";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const BhaiyaGPT = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Namaste 🙏 Main Bhaiya GPT hoon. Bihar se related koi bhi sawal poochhiye.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMsg.text,
        }),
      });

      const data = await res.json();

      const botMsg: Message = {
        role: "assistant",
        text: data.reply || "Koi jawab nahi mila.",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Server se connection nahi ho pa raha. Thodi der baad try karein.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bhaiya-gpt-page">
      {/* HEADER */}
      <div className="chat-header">
        <h2>Bhaiya GPT</h2>
        <p>Bihar-focused AI Assistant</p>
      </div>

      {/* CHAT BODY */}
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.role}`}>
            <div className="bubble">{msg.text}</div>
          </div>
        ))}

        {loading && (
          <div className="chat-message assistant">
            <div className="bubble">Soch raha hoon…</div>
          </div>
        )}
      </div>

      {/* INPUT */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Bihar ke baare me poochhiye..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          disabled={loading}
        />
        <button onClick={handleSend} disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default BhaiyaGPT;
