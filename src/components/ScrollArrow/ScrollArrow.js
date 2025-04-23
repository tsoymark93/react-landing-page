export class ScrollArrow {
  constructor() {
    this.render();
    this.addEventListeners();
    this.observeSections();
  }

  render() {
    const arrow = document.createElement("div");
    arrow.className = "scroll-arrow";
    arrow.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    document.body.appendChild(arrow);
  }

  addEventListeners() {
    const arrow = document.querySelector(".scroll-arrow");

    arrow.addEventListener("click", () => {
      const footer = document.querySelector("footer");
      const isAtBottom = this.isAtBottom();

      if (isAtBottom) {
        // Если внизу страницы, прокручиваем наверх
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // Иначе ищем следующую секцию
        const scrollableElements = document.querySelectorAll("section, footer");
        const currentScroll = window.scrollY + window.innerHeight / 2;

        for (let i = 0; i < scrollableElements.length; i++) {
          const element = scrollableElements[i];
          const elementTop = element.offsetTop;
          const elementBottom = elementTop + element.offsetHeight;

          if (currentScroll >= elementTop && currentScroll < elementBottom) {
            if (i < scrollableElements.length - 1) {
              scrollableElements[i + 1].scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
            break;
          }
        }
      }
    });
  }

  isAtBottom() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const threshold = 100; // Порог в пикселях от нижней части страницы

    // Проверяем, достигли ли мы нижней части страницы с учетом порога
    return scrollPosition + windowHeight >= documentHeight - threshold;
  }

  isLightBackground(element) {
    const computedStyle = window.getComputedStyle(element);
    const bgColor = computedStyle.backgroundColor;

    // Если фон прозрачный или не задан, проверяем цвет текста
    if (bgColor === "rgba(0, 0, 0, 0)" || bgColor === "transparent") {
      const textColor = computedStyle.color;
      return textColor !== "rgb(255, 255, 255)";
    }

    // Преобразуем RGB в HSL для определения яркости
    const rgb = bgColor.match(/\d+/g);
    if (rgb) {
      const [r, g, b] = rgb.map(Number);
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const l = (max + min) / 2;
      return l > 128; // Если яркость больше 50%, считаем фон светлым
    }

    return true; // По умолчанию считаем фон светлым
  }

  observeSections() {
    const arrow = document.querySelector(".scroll-arrow");

    const checkScrollPosition = () => {
      const isAtBottom = this.isAtBottom();
      arrow.querySelector("svg").style.transform = isAtBottom
        ? "rotate(180deg)"
        : "rotate(0deg)";
    };

    // Проверяем положение при скролле
    window.addEventListener("scroll", checkScrollPosition);

    // Проверяем положение при изменении размера окна
    window.addEventListener("resize", checkScrollPosition);

    // Проверяем начальное положение
    checkScrollPosition();
  }
}
