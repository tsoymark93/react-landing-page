export class Header {
  constructor() {
    this.element = document.querySelector(".header");
    this.render();
  }

  render() {
    this.element.innerHTML = `
            <div class="header__container">
                <div class="header__logos">
                    <img src="/images/UNlogo.svg" alt="UN Logo" class="header__logo">
                    <img src="/images/BUREAUlogo.svg" alt="Bureau Logo" class="header__logo">
                </div>
                <nav class="header__nav">
                    <a href="#about" class="header__link">О проекте</a>
                    <a href="#speakers" class="header__link">Спикеры</a>
                    <a href="#program" class="header__link">Программа</a>
                    <a href="#contacts" class="header__link">Контакты</a>
                </nav>
                <button class="button header__button">Регистрация</button>
            </div>
        `;
  }
}
