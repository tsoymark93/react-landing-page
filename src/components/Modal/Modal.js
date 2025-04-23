const styles = `
  .modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
  }

  .modal_opened {
    display: block;
  }

  .modal__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
`;

export class Modal {
  constructor() {
    this.addStyles();
    this.render();
    this.attachEventListeners();
  }

  addStyles() {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
  }

  render() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "registrationModal";

    modal.innerHTML = `
      <div class="modal__overlay">
        <div class="modal__content" style="max-width: 800px; width: 95%; height: 90vh; background: #fff; border-radius: 8px; overflow: hidden; padding: 0;">
          <button class="modal__close" style="position: absolute; right: 10px; top: 10px; z-index: 1000; background: white; border-radius: 50%; padding: 5px; border: none; cursor: pointer;">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
            </svg>
          </button>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfohRLF7m04tj7KWoqbxyc2_Q_LkicdDzRcxtko4P87S55LdA/viewform?embedded=true" 
            width="100%" 
            height="100%" 
            frameborder="0" 
            marginheight="0" 
            marginwidth="0"
            style="height: 100%; width: 100%;"
          >
            Загрузка формы...
          </iframe>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  attachEventListeners() {
    const modal = document.getElementById("registrationModal");
    const closeBtn = modal.querySelector(".modal__close");
    const overlay = modal.querySelector(".modal__overlay");

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
