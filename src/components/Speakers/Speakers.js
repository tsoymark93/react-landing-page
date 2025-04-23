export class Speakers {
  constructor() {
    this.render();
  }

  render() {
    const section = document.createElement("section");
    section.className = "speakers";
    section.id = "speakers";

    section.innerHTML = `
            <div class="speakers__officials">
                <div class="speakers__officials-container">
                    <h2 class="speakers__title">Официальные лица и модераторы</h2>
                    <div class="speakers__row speakers__row_officials">
                        <div class="speaker-card speaker-card_ministry">
                            <div class="speaker-card__image-wrapper">
                                <img src="public/images/speakers/Ministry.png" alt="Министерство энергетики" class="speaker-card__image">
                            </div>
                            <div class="speaker-card__info">
                                <h3 class="speaker-card__ministry">Министерство энергетики Республики Казахстан</h3>
                                <p class="speaker-card__ministry-desc">Министерство экологии и природных ресурсов Республики Казахстан</p>
                            </div>
                        </div>
                        <div class="speaker-card">
                            <div class="speaker-card__image-wrapper">
                                <img src="public/images/speakers/Stephanie.png" alt="д-р Стефани Бланкенбург" class="speaker-card__image">
                            </div>
                            <div class="speaker-card__info">
                                <h3 class="speaker-card__name">д-р Стефани Бланкенбург</h3>
                                <p class="speaker-card__position">Руководитель регионального подразделения, UNCTAD, Женева, Швейцария</p>
                            </div>
                        </div>
                        <div class="speaker-card">
                            <div class="speaker-card__image-wrapper">
                                <img src="public/images/speakers/Kuanysh.png" alt="Куаныш Бейсенгазин" class="speaker-card__image">
                            </div>
                            <div class="speaker-card__info">
                                <h3 class="speaker-card__name">Куаныш Бейсенгазин</h3>
                                <p class="speaker-card__position">Управляющий партнер, Национальное Бюро экономических исследований, Казахстан</p>
                            </div>
                        </div>
                        <div class="speaker-card">
                            <div class="speaker-card__image-wrapper">
                                <img src="public/images/speakers/Zulpat.png" alt="Зулпат Азиева" class="speaker-card__image">
                            </div>
                            <div class="speaker-card__info">
                                <h3 class="speaker-card__name">Зулпат Азиева</h3>
                                <p class="speaker-card__position">Управляющий директор ОЮЛ «Ассоциация по содействию в инфраструктурном и инновационном развитии»</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="speakers__container">
                <h2 class="speakers__title">Участники и спикеры</h2>
                <div class="speakers__row speakers__row_participants">
                    <div class="speaker-card">
                        <div class="speaker-card__image-wrapper">
                            <img src="public/images/speakers/Dastan.png" alt="Дастан Кошербаев" class="speaker-card__image">
                        </div>
                        <div class="speaker-card__info">
                            <h3 class="speaker-card__name">Дастан Кошербаев</h3>
                            <p class="speaker-card__position">Член Правления АО «НАК «Казатомпром», Главный директор по стратегии и международному развитию</p>
                        </div>
                    </div>
                    <div class="speaker-card">
                        <div class="speaker-card__image-wrapper">
                            <img src="public/images/speakers/Yuliya.png" alt="Юлия Якупбаева" class="speaker-card__image">
                        </div>
                        <div class="speaker-card__info">
                            <h3 class="speaker-card__name">Юлия Якупбаева</h3>
                            <p class="speaker-card__position">Председатель Совета по устойчивому развитию и ESG НПП «Атамекен», Партнер Группы компаний «GPI»</p>
                        </div>
                    </div>
                    <div class="speaker-card">
                        <div class="speaker-card__image-wrapper">
                            <img src="public/images/speakers/Nikolay.png" alt="Николай Посыпанко" class="speaker-card__image">
                        </div>
                        <div class="speaker-card__info">
                            <h3 class="speaker-card__name">Николай Посыпанко</h3>
                            <p class="speaker-card__position">Руководитель Центра устойчивого развития, «Евразийская энергетическая группа»</p>
                        </div>
                    </div>
                    <div class="speaker-card">
                        <div class="speaker-card__image-wrapper">
                            <img src="public/images/speakers/Ilya.png" alt="Илья Вульф" class="speaker-card__image">
                        </div>
                        <div class="speaker-card__info">
                            <h3 class="speaker-card__name">Илья Вульф</h3>
                            <p class="speaker-card__position">Группа услуг в области устойчивого развития и изменения климата Ernst&Young</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

    document.querySelector(".content").appendChild(section);
  }
}
