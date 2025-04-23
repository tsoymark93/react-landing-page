export class AboutProject {
  constructor() {
    this.render();
  }

  render() {
    const section = document.createElement("section");
    section.className = "about-project";
    section.id = "about";

    section.innerHTML = `
            <div class="about-project__container">
                <h2 class="about-project__title">О проекте</h2>
                <div class="about-project__content">
                    <div class="about-project__column">
                        <p class="about-project__paragraph">
                            <span class="about-project__highlight">Высокоуровневая национальная консультация</span> организована 
                            <span class="about-project__highlight">UNCTAD</span> совместно с 
                            <span class="about-project__highlight">Национальным Бюро экономических исследований</span>.
                        </p>
                        <div class="about-project__indented">
                            <p class="about-project__paragraph">
                                Цель встречи — представить и обсудить 
                                <span class="about-project__highlight">международные рекомендации к Дорожной карте по реализации Стратегии</span> 
                                достижения углеродной нейтральности Казахстана к 2060 году.
                            </p>
                            <p class="about-project__paragraph">
                                В рамках мероприятия будут представлены результаты моделирования влияния 
                                <span class="about-project__highlight">климатических рисков</span> на 
                                <span class="about-project__highlight">экономику и занятость</span>.
                            </p>
                            <p class="about-project__paragraph">
                                Во второй половине дня запланирован 
                                <span class="about-project__highlight">интерактивный воркшоп</span>, 
                                в ходе которого участники совместно 
                                <span class="about-project__highlight">сформулируют рекомендуемые меры</span>, 
                                которые важно учесть в Дорожной карте по декарбонизации.
                            </p>
                        </div>
                        <p class="about-project__paragraph">
                            <span class="about-project__highlight">Национальная консультация — возможность для вовлечённого участия и реального влияния на формирование Климатической политики страны</span>.
                        </p>
                        <p class="about-project__paragraph about-project__paragraph_italic">
                            Присоединяйтесь к ведущим экспертам, регуляторам, казахстанским 
                            и международным компаниям, чтобы вместе разработать решения 
                            для устойчивого будущего Казахстана!
                        </p>
                        <p class="about-project__note">
                            Регистрируйтесь — количество участников ограничено
                        </p>
                        <button class="button about-project__button">Принять участие</button>
                    </div>
                    <div class="about-project__column">
                        <p class="about-project__paragraph">
                            Мероприятие проводится в рамках 
                            <span class="about-project__highlight">масштабного Проекта UNCTAD</span> 
                            по устойчивому, зеленому и преобразующему развитию в странах Азиатской 
                            инициативы «Один пояс — один путь», направленного на поддержку 
                            Казахстана, Турции, Малайзии и Пакистана в достижении Целей устойчивого развития.
                        </p>
                        <p class="about-project__paragraph">
                            Проект способствует разработке интегрированных стратегий и укреплению 
                            регионального сотрудничества, необходимого для экологической 
                            и экономической трансформации.
                        </p>
                        <div class="about-project__image">
                            <img src="/images/AboutProject.png" alt="Project on Resilient, Green and Transformative Development">
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.querySelector(".content").appendChild(section);
  }
}
