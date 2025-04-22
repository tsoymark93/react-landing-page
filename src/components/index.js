import { Header } from "./Header/Header.js";
import { SocialLinks } from "./SocialLinks/SocialLinks.js";
import { AboutProject } from "./AboutProject/AboutProject.js";
import { Speakers } from "./Speakers/Speakers.js";
import { Program } from "./Program/Program.js";
import { Footer } from "./Footer/Footer.js";
import { Modal } from "./Modal/Modal.js";
import "./Header/Header.css";
import "./SocialLinks/SocialLinks.css";
import "./AboutProject/AboutProject.css";
import "./Speakers/Speakers.css";
import "./Program/Program.css";
import "./Footer/Footer.css";
import "./Modal/Modal.css";

document.addEventListener("DOMContentLoaded", () => {
  new Header();
  new SocialLinks();
  new AboutProject();
  new Speakers();
  new Program();
  new Footer();

  const modal = new Modal();

  // Находим все кнопки регистрации
  const registrationButtons = document.querySelectorAll(
    ".header__button, .hero__button, .about-project__button"
  );

  // Добавляем обработчик для каждой кнопки
  registrationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.openModal();
    });
  });
});
