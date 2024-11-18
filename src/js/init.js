export default class Character {
  constructor() {
  }

  static randomGoblin() {
    document.addEventListener("DOMContentLoaded", () => {
      const newDiv = document.createElement("div");
      const img = document.createElement("img");
      img.src = "https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/dom/pic/goblin.png";
      img.alt = "Гоблин";
      newDiv.appendChild(img);

      //let noStrikeCount = 0;
      function moviGoblin() {
        const field = document.querySelectorAll(".grid-cell");
        const newPosition = Math.floor(Math.random() * (field.length - 1));
        newDiv.children[0].classList.remove("hide"); //убираем класс скрытности гоблина, который мог остаться от прошлого скрытия при клике
        field[newPosition].appendChild(newDiv);

        //Добавляем к значению неудач +1
        const noStrike = document.querySelector(".miss");
        let noStrikeCount = +noStrike.textContent;
        noStrikeCount += 1;
        noStrike.textContent = noStrikeCount;

        //Если неудач больше 5, то останавливаем игру
        if (noStrikeCount > 5) {
          clearInterval(interval);
          alert("Вы проиграли!");
        }
      }

      const interval = setInterval(moviGoblin, 1000);
    });
  }
}

/*
  init() {
    this.game.init();
    this.getRandomPosition();
  }

  getRandomPosition() {
    let previous = 0;
    let i = 0;

    const interval = setInterval(() => {
      while (i === previous) {
        i = Math.floor(Math.random() * (this.cell.length - 1));
      }

      if (this.cell[previous].querySelector(".icon")) {
        this.game.missed();

        if (this.game.miss === 5) {
          clearInterval(interval);
          alert("Вы проиграли!"); // eslint-disable-line no-alert
        }
      }
      
      previous = i;
      this.cell[i].appendChild(this.icon);
    }, 1000);
  }
}*/