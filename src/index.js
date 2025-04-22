import "./styles/index.css";
import { Header } from "./components/Header/Header";
import { AboutProject } from "./components/AboutProject/AboutProject";
import { Speakers } from "./components/Speakers/Speakers";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.createElement("main");
  content.className = "content";
  document.body.appendChild(content);

  new Header();
  new AboutProject();
  new Speakers();
});
