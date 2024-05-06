import { Collapse } from "antd";
import React from "react";
import "./Faq.css";
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: "1",
    label: "Какой минимальный возраст для аренды автомобиля?",
    children: (
      <p>
        Минимальный возраст для аренды автомобилей — 25 лет. Водители моложе 25
        лет должны иметь стаж вождения более 2 лет.
      </p>
    ),
  },
  {
    key: "2",
    label: "Какие документы нужны для аренды автомобиля?",
    children: (
      <p>
        Паспорт, водительское удостоверение – обратите внимание, что мы
        принимаем только оригиналы данных документов.
      </p>
    ),
  },
  {
    key: "3",
    label:
      "Сколько стоит страховой лимит при аренде автомобилей класса люкс в Дубае?",
    children: (
      <p>
        Включает в себя полную страховку транспортного средства. 3000–5000
        дирхамов ОАЭ за автомобили повышенной комфортности. 7000-10000 дирхамов
        ОАЭ за спортивные автомобили.
      </p>
    ),
  },
  {
    key: "4",
    label: "Какие водительские права можно использовать в арабских странах?",
    children: (
      <p>
        Местные водительские права для граждан ОАЭ. Международные водительские
        права, выданные следующими странами: 1. Королевство Саудовская Аравия,
        2. Египет, 3. Бахрейн, 4. Иордания, 5. Кувейт, 6. Тунис, 7. Султанат
        Оман, 8. Алжир, 9. Катар, 10. Марокко, 11. Судан, 12. Сомали, 13.
        Палестина, 14. Ливан, 15. Ливия, 16. Сирия, 17. Йемен, 18. Ирак, 19.
        Джибути, 20. Коморские Острова, 21. Мавритания.
      </p>
    ),
  },
  {
    key: "5",
    label: "Может ли кто-нибудь еще управлять автомобилем, который я арендую?",
    children: (
      <p>
        В договоре прописываются два водителя, но на момент оформления договора
        необходимо предоставить водительское удостоверение и паспорт.
      </p>
    ),
  },
];
const Faq = () => {
  return (
    <div className="faq container">
      <div className="faq-box ">
        <div className="faq-title">
          <h3>FAQ</h3>
        </div>
        <div className="faq-item_box w-[100%]">
          <Collapse accordion items={items} />
        </div>
      </div>
    </div>
  );
};

export default Faq;