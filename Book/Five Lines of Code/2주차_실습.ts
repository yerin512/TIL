// 4조의 멋진 코드 리팩터링
// 1. 플래닝: 
// - 5분 정도는 책에 있는대로 바꿔보기 (X)
// - 3분씩 스위칭하면서 한번씩 돌아보기

// - 가장 눈에 거슬리는 것부터 시작하기: 무조건 한사람당 하나씩 발견할 것. TypeScript였음.


const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

enum Tile {
  AIR,
  FLUX,
  UNBREAKABLE,
  PLAYER,
  STONE, FALLING_STONE,
  BOX, FALLING_BOX,
  KEY1, LOCK1,
  KEY2, LOCK2
}

enum Input {
  UP, DOWN, LEFT, RIGHT
}

let playerx = 1;
let playery = 1;
let map: Tile[][] = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 0, 1, 1, 2, 0, 2],
  [2, 4, 2, 6, 1, 2, 0, 2],
  [2, 8, 4, 1, 1, 2, 0, 2],
  [2, 4, 1, 1, 1, 9, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
];

let inputs: Input[] = [];

function remove(tile: Tile) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === tile) {
        map[y][x] = Tile.AIR;
      }
    }
  }
}

function moveToTile(newx: number, newy: number) {
  map[playery][playerx] = Tile.AIR;
  map[newy][newx] = Tile.PLAYER;
  playerx = newx;
  playery = newy;
}

function moveHorizontal(dx: number) {
  if (map[playery][playerx + dx] === Tile.FLUX
    || map[playery][playerx + dx] === Tile.AIR) {
    moveToTile(playerx + dx, playery);
  } else if ((map[playery][playerx + dx] === Tile.STONE
    || map[playery][playerx + dx] === Tile.BOX)
    && map[playery][playerx + dx + dx] === Tile.AIR
    && map[playery + 1][playerx + dx] !== Tile.AIR) {
    map[playery][playerx + dx + dx] = map[playery][playerx + dx];
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx] === Tile.KEY1) {
    remove(Tile.LOCK1);
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx] === Tile.KEY2) {
    remove(Tile.LOCK2);
    moveToTile(playerx + dx, playery);
  }
}

// 홍석 (선점)
// 조건문 내부가 무엇인지 모르겠음
// 1. else if를 if로 변경
// 2. return을 추가
// 3. 조건문 내부에 변수명을 선언하여 조건을 추상화
function moveVertical(dy: number) {
  const canIMove = map[playery + dy][playerx] === Tile.FLUX || map[playery + dy][playerx] === Tile.AIR;

  if (canIMove) {
    moveToTile(playerx, playery + dy);
    return;
  }

  if (map[playery + dy][playerx] === Tile.KEY1) {
    remove(Tile.LOCK1);
    moveToTile(playerx, playery + dy);
    return;
  }

  if (map[playery + dy][playerx] === Tile.KEY2) {
    remove(Tile.LOCK2);
    moveToTile(playerx, playery + dy);
    return;
  }

  return;
}

// 예린 (선점)
function update() {
  // 무엇을 리팩터링? - 반복문 안에 있는 조건문이 있는데, 조건문을 함수로 추출한다.
  // 왜? - 조건이 많다면 가독성이 떨어진다? / 조건문을 모아서 추상화를 시키고, 이 때 함수명을 통해서 무엇을 말하는지 명확하게 해준다. (납득했다!)

  // As-Is
  /*
  while (inputs.length > 0) {
    let current = inputs.pop();
    if (current === Input.LEFT)
      moveHorizontal(-1);
    else if (current === Input.RIGHT)
      moveHorizontal(1);
    else if (current === Input.UP)
      moveVertical(-1);
    else if (current === Input.DOWN)
      moveVertical(1);
  */

  // 코멘트: 
  // handleInput 함수명이 모호함? / moveWithDirection
  // 분기가 아닌 배열로 x축과 y축을 받아도 좋지 않을까?
  // 분기를 많이 만들 필요가 없다. 오!

  // 상훈 - 대략 이런 느낌
  function moveWithDirection(input: Input) {
    direction = [(0, 1), (1, 0), (0, -1), (-1, 0)];
    nx, ny = direction[input];

    return map[x + nx][y + ny];

  }

  function handleInput(current) {
    moveWithDirection(current);
  }


  function handleInput(current) {
    if (current === Input.LEFT)
      moveHorizontal(-1);
    else if (current === Input.RIGHT)
      moveHorizontal(1);
    else if (current === Input.UP)
      moveVertical(-1);
    else if (current === Input.DOWN)
      moveVertical(1);
  }
}

while (inputs.length > 0) {
  let current = inputs.pop();
  // input 값 받기
  handleInput(current);
}

for (let y = map.length - 1; y >= 0; y--) {
  for (let x = 0; x < map[y].length; x++) {
    if ((map[y][x] === Tile.STONE || map[y][x] === Tile.FALLING_STONE)
      && map[y + 1][x] === Tile.AIR) {
      map[y + 1][x] = Tile.FALLING_STONE;
      map[y][x] = Tile.AIR;
    } else if ((map[y][x] === Tile.BOX || map[y][x] === Tile.FALLING_BOX)
      && map[y + 1][x] === Tile.AIR) {
      map[y + 1][x] = Tile.FALLING_BOX;
      map[y][x] = Tile.AIR;
    } else if (map[y][x] === Tile.FALLING_STONE) {
      map[y][x] = Tile.STONE;
    } else if (map[y][x] === Tile.FALLING_BOX) {
      map[y][x] = Tile.BOX;
    }
  }
}
}

function draw() {
  let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
  let g = canvas.getContext("2d");

  g.clearRect(0, 0, canvas.width, canvas.height);

  // Draw map
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === Tile.FLUX)
        g.fillStyle = "#ccffcc";
      else if (map[y][x] === Tile.UNBREAKABLE)
        g.fillStyle = "#999999";
      else if (map[y][x] === Tile.STONE || map[y][x] === Tile.FALLING_STONE)
        g.fillStyle = "#0000cc";
      else if (map[y][x] === Tile.BOX || map[y][x] === Tile.FALLING_BOX)
        g.fillStyle = "#8b4513";
      else if (map[y][x] === Tile.KEY1 || map[y][x] === Tile.LOCK1)
        g.fillStyle = "#ffcc00";
      else if (map[y][x] === Tile.KEY2 || map[y][x] === Tile.LOCK2)
        g.fillStyle = "#00ccff";

      if (map[y][x] !== Tile.AIR && map[y][x] !== Tile.PLAYER)
        g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }
  }

  // Draw player
  g.fillStyle = "#ff0000";
  g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  gameLoop();
}

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";
window.addEventListener("keydown", e => {
  if (e.key === LEFT_KEY || e.key === "a") inputs.push(Input.LEFT);
  else if (e.key === UP_KEY || e.key === "w") inputs.push(Input.UP);
  else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(Input.RIGHT);
  else if (e.key === DOWN_KEY || e.key === "s") inputs.push(Input.DOWN);
});

