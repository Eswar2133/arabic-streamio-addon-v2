export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({
    id: "org.arabic.archive",
    version: "1.0.0",
    name: "Arabic Classics",
    description: "Arabic-language movies from the Internet Archive. ✅ Legal & universal. ⚡ For best quality playback, use Real-Debrid.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Internet_Archive_logo_and_wordmark.svg",
    resources: ["catalog", "stream", "meta"],
    types: ["movie"],
    catalogs: [
      {
        type: "movie",
        id: "arabic-classics",
        name: "Arabic Archive",
      },
    ],
  });
}
