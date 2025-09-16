export default async function handler(req, res) {
  const { text } = req.query;

  if (!text) {
    return res.status(400).json({ error: "Teks wajib diisi" });
  }

  try {
    const imageUrl = `https://api.sxtream.xyz/maker/iqc?text=${encodeURIComponent(
      text
    )}`;

    // langsung redirect ke gambar
    return res.redirect(imageUrl);

  } catch (error) {
    return res.status(500).json({ error: "Gagal generate gambar" });
  }
}
