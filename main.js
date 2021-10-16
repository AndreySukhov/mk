const $arena = document.querySelector('.arenas')
const $randomBtn = document.querySelector('.button')

const changeHp = (target, player) => {
  const $targetPlayerLife = document.querySelector(`.player${target.player} .life`)
  target.hp -= createRandomNum(0, 20);
  if (target.hp <= 0) {
    $arena.appendChild(roundEnd(player.name))
    target.hp = 0;
  }
  $targetPlayerLife.style.width = `${target.hp}%`;
}

const player1 = {
  name: 'scorpion',
  player: 1,
  hp: 100,
  img: '',
  weapon: [],
  attack(target) {
    changeHp(target, this)
  }
}

const player2 = {
  name: 'subzero',
  player: 2,
  hp: 100,
  img: '',
  weapon: [],
  attack(target) {
    changeHp(target, this)
  }
}

const createPlayer = (
  player,
  name,
  life
) => {
  const playerMarkup = `
      <div class="progressbar">
          <div class="life" style="width:${life > 0 ? life : 0}%;"></div>
          <div class="name">${name}</div>
      </div>
      <div class="character">
          <img src="http://reactmarathon-api.herokuapp.com/assets/${name}.gif" alt="character ${name}" />
      </div>
  `
  const $playerCtn = document.createElement('div')

  $playerCtn.innerHTML = playerMarkup
  $playerCtn.classList.add(`player${player}`)

  return $playerCtn
}

const roundEnd = (lostPlayerName) => {
  const $roundEndMessage = document.createElement('div' )
  $roundEndMessage.classList.add('loseTitle')
  $roundEndMessage.innerHTML = `${lostPlayerName} wins`
  $randomBtn.disabled = true

  return $roundEndMessage
}

const createRandomNum = (min = 0, max = 500) => {

  if (typeof min !== 'number' || typeof max !== 'number' ) {
    console.error('min or max must be numbers');
    return Math.random();
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

$randomBtn.addEventListener('click', () => {
  player1.attack(player2)
  player2.attack(player1)
})

$arena.appendChild(createPlayer(player1.player, player1.name, player1.hp));
$arena.appendChild(createPlayer(player2.player, player2.name, player2.hp));

