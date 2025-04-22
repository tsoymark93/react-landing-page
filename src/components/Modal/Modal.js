export class Modal {
  constructor() {
    this.render();
    this.attachEventListeners();
  }

  render() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "registrationModal";

    modal.innerHTML = `
      <div class="modal__overlay">
        <div class="modal__content">
          <button class="modal__close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
            </svg>
          </button>
          <h2 class="modal__title">Регистрация участников</h2>
          <form class="modal__form">
            <div class="modal__field">
              <input type="text" class="modal__input" placeholder="ФИО" required>
            </div>
            <div class="modal__field">
              <input type="text" class="modal__input" placeholder="Организация" required>
            </div>
            <div class="modal__field">
              <input type="text" class="modal__input" placeholder="Должность" required>
            </div>
            <div class="modal__field">
              <input type="email" class="modal__input" placeholder="Электронная почта" required>
            </div>
            <div class="modal__field">
              <input type="tel" class="modal__input" placeholder="Контактный телефон" required>
            </div>
            <button type="submit" class="modal__submit">Отправить</button>
          </form>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  attachEventListeners() {
    const modal = document.getElementById("registrationModal");
    const closeBtn = modal.querySelector(".modal__close");
    const overlay = modal.querySelector(".modal__overlay");
    const form = modal.querySelector(".modal__form");

    // Закрытие по клику на крестик
    closeBtn.addEventListener("click", () => {
      this.closeModal();
    });

    // Закрытие по клику на оверлей
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        this.closeModal();
      }
    });

    // Закрытие по Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeModal();
      }
    });

    // Обработка отправки формы
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Здесь будет логика отправки формы
      this.closeModal();
    });
  }

  openModal() {
    const modal = document.getElementById("registrationModal");
    modal.classList.add("modal_opened");
    document.body.style.overflow = "hidden";
  }

  closeModal() {
    const modal = document.getElementById("registrationModal");
    modal.classList.remove("modal_opened");
    document.body.style.overflow = "";
  }
}
