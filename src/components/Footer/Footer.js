export class Footer {
  constructor() {
    this.render();
  }

  render() {
    const footer = document.createElement("footer");
    footer.className = "footer";
    footer.id = "contacts";

    footer.innerHTML = `
      <div class="footer__map">
        <div style="position:relative;overflow:hidden;">
          <a href="https://yandex.com/maps/org/hilton_garden_inn_astana/1381689309/?utm_medium=mapframe&utm_source=maps" 
             style="color:#eee;font-size:12px;position:absolute;top:0px;">
             Hilton Garden Inn Astana
          </a>
          <a href="https://yandex.com/maps/163/astana/category/hotel/184106414/?utm_medium=mapframe&utm_source=maps" 
             style="color:#eee;font-size:12px;position:absolute;top:14px;">
             Гостиница в Астане
          </a>
          <iframe src="https://yandex.com/map-widget/v1/org/hilton_garden_inn_astana/1381689309/?ll=71.414193%2C51.135252&z=14" 
                  width="100%" 
                  height="600" 
                  frameborder="1" 
                  allowfullscreen="true" 
                  style="position:relative;">
          </iframe>
        </div>
      </div>
      <div class="footer__copyright">
        Все права защищены - 2025
      </div>
    `;

    document.querySelector(".content").appendChild(footer);
  }
}
