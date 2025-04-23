import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Добавляем скрипт Google Translate
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Инициализация виджета
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "ru",
          includedLanguages: "en,es,fr,de,it,pt,ja,ko,zh-CN,ar",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    return () => {
      // Очистка при размонтировании компонента
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="google-translate-container">
      <div id="google_translate_element"></div>
    </div>
  );
};

export default GoogleTranslate;
