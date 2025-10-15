import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

const TOKEN = "usr-51E-rQa5pgTQmyLBFRNAINUXBDAmYyCAaBHAOD-LjZ8";

app.get("/plants", async (req, res) => {
  const q = req.query.q || "";
  try {
    const apiRes = await fetch(`https://trefle.io/api/v1/plants/search?token=${TOKEN}&q=${encodeURIComponent(q)}`);
    const data = await apiRes.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Chyba pri volaní Trefle API" });
  }
});

app.listen(3000, () => console.log("Proxy beží na http://localhost:3000"));
