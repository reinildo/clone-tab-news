export default function handler(req, res) {
  // 🔥 Configura CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ⚙️ Trata pré-flight (OPTIONS)
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  // ✅ Retorna apenas a string "true"
  res.status(200).send("true");
}
