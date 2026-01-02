import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

const BOT_NAME = "@Bot";

const SYSTEM_PROMPT = `
Sen bir WhatsApp grup yardımcı asistanısın.
Bu grup bir flört uygulamasının resmi grubudur.
Flört etme.
Emoji kullanma.
Kısa ve net cevap ver.
Gerekirse insan asistana yönlendir.
`;

app.post("/webhook", async (req, res) => {
  try {
    const msg = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    if (!msg) return res.sendStatus(200);

    const text = msg.text?.body || "";
    if (!text.includes(BOT_NAME)) return res.sendStatus(200);

    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(200);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Bot çalışıyor"));

