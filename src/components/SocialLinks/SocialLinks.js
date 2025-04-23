export class SocialLinks {
  constructor() {
    this.element = document.querySelector(".social-links");
    this.render();
  }

  render() {
    const socialLinks = [
      { icon: "/images/Facebook.svg", url: "#", alt: "Facebook" },
      { icon: "/images/X.svg", url: "#", alt: "X (Twitter)" },
      { icon: "/images/YouTube.svg", url: "#", alt: "YouTube" },
      { icon: "/images/LinkedIn.svg", url: "#", alt: "LinkedIn" },
      { icon: "/images/Telegram.svg", url: "#", alt: "Telegram" },
    ];

    this.element.innerHTML = socialLinks
      .map(
        (link) => `
                <a href="${link.url}" class="social-links__item" target="_blank" rel="noopener noreferrer">
                    <img src="${link.icon}" alt="${link.alt}" class="social-links__icon">
                </a>
            `
      )
      .join("");
  }
}
