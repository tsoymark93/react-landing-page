import React from "react";
import "./Program.css";

const Program = () => {
  return (
    <section className="program" id="program">
      <div className="program__container">
        <div className="program__header">
          <h2 className="program__title">Программа Консультации</h2>
          <button className="program__download-btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                fill="white"
              />
            </svg>
            Скачать полную версию
          </button>
        </div>
        <div className="program__table">
          <div className="program__row" data-time="09:30 – 10:00">
            <div className="program__time">09:30 – 10:00</div>
            <div className="program__content">
              Регистрация участников и кофе-брейк
            </div>
          </div>
          <div className="program__row">
            <div className="program__time">10:00 – 10:20</div>
            <div className="program__content">Приветственные слова</div>
          </div>
          <div className="program__row">
            <div className="program__time">10:20 – 10:50</div>
            <div className="program__content">Официальные обращения</div>
          </div>
          <div className="program__row" data-time="10:50 – 13:00">
            <div className="program__time">10:50 – 13:00</div>
            <div className="program__content">
              <div className="program__content-title">Панельная сессия</div>
              <div className="program__content-link">
                Обсуждение рекомендаций к Дорожной карте и Стратегии достижения
                углеродной нейтральности
              </div>
            </div>
          </div>
          <div className="program__row" data-time="13:00 – 14:30">
            <div className="program__time">13:00 – 14:30</div>
            <div className="program__content">Перерыв</div>
          </div>
          <div className="program__row">
            <div className="program__time">14:30 – 15:20</div>
            <div className="program__content">
              Workshop{" "}
              <span className="program__content-gray">
                (интерактивный модуль)
              </span>
            </div>
          </div>
          <div className="program__row">
            <div className="program__time">15:20 – 15:40</div>
            <div className="program__content">Кофе-брейк</div>
          </div>
          <div className="program__row" data-time="15:40 – 17:00">
            <div className="program__time">15:40 – 17:00</div>
            <div className="program__content">
              Работа в группах{" "}
              <span className="program__content-gray">(3-4 группы)</span>
            </div>
          </div>
          <div className="program__row">
            <div className="program__time">17:20 – 17:30</div>
            <div className="program__content">Заключительное слово</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
