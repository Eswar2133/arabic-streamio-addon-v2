export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.json({
    streams: [
      {
        title: "Watch HD",
        url: "https://archive.org/download/Nasser-Salah-El-Din/Nasser-Salah-El-Din.mp4"
      }
    ]
  });
}
