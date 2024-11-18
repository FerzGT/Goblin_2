export default class Score {
    constructor() {
    }
  
    static click() {
      const field = document.querySelectorAll(".grid-cell");
      field.forEach((element) => {
        element.addEventListener("click", function (e) {
          if (e.target.alt === "Гоблин") {
            //Прибавляем количество попаданий
            let strikeElement = document.querySelector(".msg");
            let points = +strikeElement.textContent;
            points += 1;
            strikeElement.textContent = points;
  
            //Уменьшаем количество появлений гоблина
            const noStrike = document.querySelector(".miss");
            let noStrikeCount = +noStrike.textContent;
            noStrikeCount -= 1;
            noStrike.textContent = noStrikeCount;
  
            e.target.classList.add("hide");
  
            //Удаляем гоблина из ячейки
          }
        });
        element.addEventListener("mouseenter", function () {
          if (element.childElementCount) {
            element.classList.add("cursor");
          }
        });
        element.addEventListener("mouseleave", function () {
          element.classList.remove("cursor");
        });
      });
    }
  }