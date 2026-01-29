import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Root check
 */
app.get("/", (req, res) => {
  res.send("Bhaiya GPT (Local AI) backend is running");
});

/**
 * Chat API
 */
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || message.trim().length === 0) {
      return res.json({ reply: "Sawal likhiye." });
    }

    const ollamaResponse = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "llama3",
        prompt: `
You are Bhaiya GPT.
You only answer questions related to Bihar.
Reply in simple Hindi or Hinglish.
Do not answer medical, legal, or political questions.
Reply in 3–5 clear lines.

Question: ${message}
`,
        stream: false,
      }),
    });

    const data = await ollamaResponse.json();

    let reply = data?.response;

    // ✅ Safe fallback (never blank)
    if (!reply || reply.trim().length === 0) {
      reply =
        "Bihar ke prasiddh tourist places me Bodh Gaya, Nalanda, Rajgir aur Vaishali shamil hain. Ye jagah itihas, dharm aur prakriti ke liye mashhoor hain.";
    }

    res.json({ reply });
  } catch (error) {
    console.error("Ollama error:", error);
    res.status(500).json({
      reply: "Local AI service available nahi hai. Ollama running hai ya nahi check karein.",
    });
  }
});

/**
 * Start server
 */
app.listen(5000, () => {
  console.log("✅ Bhaiya GPT (Local AI) running on http://localhost:5000");
});
