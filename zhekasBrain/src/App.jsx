import { useEffect, useState } from "react";
import exor from "./common/sticker.webp"
import ihar from "./common/ihar.webp";

import "./App.css";

function App() {
  const [text, setText] = useState("");

  const [dotsCount, setDotsCount] = useState(0);
  const [bracketsCount, setBracketsCount] = useState(0);
  const [dotsPercent, setDotsPercent] = useState(0);

  const redDotsText = 'Опасный, возможно, критический процент точек. Срочно окажите Жеке первую помощь!'
  const yellowDotsText = 'Средний процент точек. Возможно, Жека немного взволнован.'
  const greenDotsText = 'Легкий процент точек. Скорее всего, Жека расслаблен и не волнуется. Смотрит ватные паблики.'
  const notZhekaText = 'Слишком малый процент точек. Скорее всего, вы проверяете ехора.'

  const redBracketsText = 'Очень много скобечек. Возможно ехорка запостил видео с убийсвтом детей или с ударом по жилому дому!'
  const yellowBracketsText = 'Среднее количество скобочек. Ехорка взволнован, возможно, спорит с кем-то в чате. Старается через скобки победить соперника.'
  const greenBracketsText = 'Слабое количество скобочек. Скорее всего, ехорка трезв, расслаблен, игрив. Смотрит Zloy пруф или ColonellHuesos.'

  const checkDotsAndBrackets = (str) => {
    let dotsCount = 0;
    let bracketCount = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === ".") {
        dotsCount++;
      } else if ((str[i] === ")") | (str[i] === "(")) {
        bracketCount++;
      } 
    }
    setDotsPercent(Math.round((dotsCount * 100) / text.length));
    setDotsCount(dotsCount);
    setBracketsCount(bracketCount);
  }

  useEffect(() => {
    checkDotsAndBrackets(text);
  }, [text])

  return (
    <div className="wrapper">
      <div className="photos">
        <img className="spin" src={exor} />
        <img className="spin" src={ihar} />
      </div>
      <h2>
        Проверь количество точек в сообщении жеки и количество точек в
        сообщениях ехорки!
      </h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input"
        placeholder="Скопируйте или введите текст жениточки или ехора"
      />
      {text.length !== 0 && (
        <div className="stats">
          {dotsPercent <= 25 && (
            <div>
              <span className="ehorText">
                Всего точек: {dotsCount}. Процент точек: {dotsPercent}%.{" "}
                {notZhekaText}{" "}
              </span>
            </div>
          )}
          {dotsPercent < 30 && dotsPercent > 25 && (
            <div>
              <span className="greenText">
                Всего точек: {dotsCount}. Процент точек: {dotsPercent}%.{" "}
                {greenDotsText}{" "}
              </span>
            </div>
          )}
          {dotsPercent < 45 && dotsPercent >= 30 && (
            <div>
              <span className="yellowText">
                Всего точек: {dotsCount}. Процент точек: {dotsPercent}%.{" "}
                {yellowDotsText}{" "}
              </span>
            </div>
          )}
          {dotsPercent >= 45 && (
            <div>
              <span className="redText">
                Всего точек: {dotsCount}. Процент точек: {dotsPercent}%.{" "}
                {redDotsText}{" "}
              </span>
            </div>
          )}
          {bracketsCount <= 5 && bracketsCount > 2 && (
            <div>
              <span className="greenText">
                Всего cкобочек: {bracketsCount}. {greenBracketsText}{" "}
              </span>
            </div>
          )}
          {bracketsCount <= 10 && bracketsCount > 5 && (
            <div>
              <span className="yellowText">
                Всего cкобочек: {bracketsCount}. {yellowBracketsText}{" "}
              </span>
            </div>
          )}
          {bracketsCount >= 11 && (
            <div>
              <span className="redText">
                Всего cкобочек: {bracketsCount}. {redBracketsText}{" "}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
