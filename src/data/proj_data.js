import barterImg from "../assets/proj_pic/barterdb.png";
import legendImg from "../assets/proj_pic/legend.png";
import ecommerceImg from "../assets/proj_pic/ecommerce.jpg";
import cloakImg from "../assets/proj_pic/cloak.jpg";
import flutterImg from "../assets/proj_pic/flutter.jpg";
import textgameImg from "../assets/proj_pic/textgame.jpg";

export const projects = [
  {
    title: "BarterDB",
    description:
      "A native barter platform with role-based login, item listing, trade creation and QR-code verification. Backend built with Django/SQLite, frontend with Kotlin and React.",
    image: barterImg,
    stack: ["HTML", "CSS", "Python", "SQLite", "Flask"],
    github: "https://github.com/shruti-246/BarterSystem",
    demo: "https://bartersystem-mowi.onrender.com",   
  },
  {
    title: "Legend of Warriors",
    description:
      "Unity-based 3D game with customizable characters, achievements and in-game shop. Developed full UI and menu systems using C#.",
    image: legendImg,
    stack: ["Unity", "C#", "Unity Testing"],
    github: "https://github.com/shruti-246/legend_of_warriors",
    demo: "https://drive.google.com/file/d/1fR7Z4LCLAUbvLe8JaqucWBlK9Gi16i0b/view?usp=drive_link",   
  },
  {
    title: "E-Commerce DB Design",
    description:
      "Designed and optimized the database layer for an online store, focusing on schema design and SQL performance tuning.",
    image: ecommerceImg,
    stack: ["MySQL", "ER Modeling"],
    github: "https://gist.github.com/shruti-246/f7a23175191ef7fbddec0dab095a7e71"
  },
  {
    title: cloakImg,
    description:
      "Fun OpenCV project that creates an invisibility cloak effect using color masking and real-time video processing.",
    image: "/assets/cloak.jpg",
    stack: ["Python", "OpenCV", "NumPy"],
    github: "https://github.com/shruti-246/First-project",
  },
  {
    title: "Quick Portfolio (Flutter)",
    description:
      "A fast portfolio app built with Flutter, showcasing my profile and key projects with smooth mobile UI.",
    image: flutterImg,
    stack: ["Flutter", "Dart", "HTML", "Render"],
    github: "https://github.com/shruti-246/flutter_portfolio",
    demo: "https://shruti-246.github.io/flutter_portfolio/", 
  },
  {
    title: "OOP 2D Text Adventure",
    description:
      "A console-based 2D adventure game demonstrating OOP principles in Python.",
    image: textgameImg,
    stack: ["Python", "OOP", "C++"],
    github: "https://github.com/shruti-246/Game_projects",
  },
];