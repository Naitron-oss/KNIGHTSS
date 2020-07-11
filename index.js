let Knight = require('./knight_game.js').Knight;
let Game = require('./knight_game.js').Game;

function stdout(msg) {
  let content = document.getElementById("content")
  let p = document.createElement("p");
  p.appendChild(document.createTextNode(msg));
  content.appendChild(p);
  console.log('content: ', content.innerHTML);
}

let game = new Game([
  new Knight(1),
  new Knight(2),
  new Knight(3),
  new Knight(4),
  new Knight(5),
  new Knight(6)
], stdout);

game.run()
