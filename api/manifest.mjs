export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { type, id } = req.query;

  if (type !== "movie" || id !== "arabic-classics") {
    res.status(404).json({ metas: [] });
    return;
  }

  const metas = [
    {
      id: "arabic-movie-1",
      type: "movie",
      name: "الناصر صلاح الدين (1963)",
      poster: "https://ia801600.us.archive.org/22/items/Nasser-Salah-El-Din/Nasser-Salah-El-Din.jpg",
      description: "فيلم مصري تاريخي من إخراج يوسف شاهين.",
    },
    {
      id: "arabic-movie-2",
      type: "movie",
      name: "Antar wa Abla (1945)",
      poster: "https://ia801700.us.archive.org/17/items/antarwaabla/antarwaabla.jpg",
      description: "كوميديا رومانسية مصرية كلاسيكية.",
    }
  ];

  res.json({ metas });
}
