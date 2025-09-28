// Developer projects data
import barterImg from "../assets/dev/barterdb.png";
import flutterImg from "../assets/dev/flutter.jpg";
import unityImg from "../assets/dev/legend.png";

export const devProjects = [
  {
    title: "BarterSystem",
    description:
      "Full-stack barter app built with Flask and SQLite. Features authentication, product listing, trade creation, and code-based verification.",
    stack: ["Flask", "SQLite", "REST API"],
    image: barterImg,
    github: "https://github.com/shruti-246/BarterSystem",
  },
  {
    title: "Flutter Portfolio",
    description:
      "Cross-platform portfolio experiment built with Flutter and Dart. Deployed to GitHub Pages to explore web/mobile flexibility.",
    stack: ["Flutter", "Dart", "GitHub Pages"],
    image: flutterImg,
    github: "https://github.com/shruti-246/flutter_portfolio",
    demo: "https://shruti-246.github.io/flutter_portfolio/",
  },
  {
    title: "Unity Game UI System",
    description:
      "Custom UI system for a Unity game — main menu, settings tabs, shop, and achievements. Designed with C# scripts and dynamic binding.",
    stack: ["Unity", "C#", "Game UI"],
    image: unityImg,
    github: "https://github.com/shruti-246/legend_of_warriors",
  },
];
