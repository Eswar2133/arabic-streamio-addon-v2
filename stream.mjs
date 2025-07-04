export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const streams = {
    "arabic-movie-1": [
      {
        title: "Watch HD",
        url: "https://archive.org/download/Nasser-Salah-El-Din/Nasser-Salah-El-Din.mp4"
      }
    ],
    "arabic-movie-2": [
      {
        title: "Watch SD",
        url: "https://archive.org/download/antarwaabla/antarwaabla.ogv"
      }
    ]
  };

  const id = req.query.id;

  if (!id || !streams[id]) {
    res.status(404).json({ streams: [] });
    return;
  }

  res.json({ streams: streams[id] });
}
