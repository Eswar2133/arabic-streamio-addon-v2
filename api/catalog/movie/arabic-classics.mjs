export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const metas = [
    {
      id: "arabic-movie-1",
      type: "movie",
      name: "الناصر صلاح الدين (1963)",
      poster: "https://ia801600.us.archive.org/22/items/Nasser-Salah-El-Din/Nasser-Salah-El-Din.jpg",
      description: "فيلم مصري تاريخي من إخراج يوسف شاهين."
    }
  ];

  res.json({ metas });
}
