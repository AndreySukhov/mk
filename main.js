const player1 = {
  name: 'scorpion',
  hp: 100,
  img: '',
  weapon: [],
  attack() {
    console.log(`${this.name} fight`)
    console.log(this, 'this')
  }
}

const player2 = {
  name: 'subzero',
  hp: 100,
  img: '',
  weapon: [],
  attack() {
    console.log(`${this.name} fight`)
  }
}

const createPlayer = (
  playerClass,
  name,
  life
) => {
  const playerMarkup = `
      <div class="progressbar">
          <div class="life" style="width:${life}%;"></div>
          <div class="name">${name}</div>
      </div>
      <div class="character">
          <img src="http://reactmarathon-api.herokuapp.com/assets/${name}.gif" alt="character ${name}" />
      </div>
  `

  const $playerCtn = document.createElement('div')

  $playerCtn.innerHTML = playerMarkup
  $playerCtn.classList.add(playerClass)

  document.querySelector('.arenas').appendChild($playerCtn)
}

createPlayer('player1', player1.name, player1.hp);
createPlayer('player2', player2.name, player2.hp);
