import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "URL gambar wajib disertakan" });
    }

    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Content-Disposition", 'attachment; filename="quoted.png"');
    res.send(Buffer.from(buffer));
  } catch (err) {
    res.status(500).json({ error: "Gagal mengambil gambar", details: err.message });
  }
      }
