var domino_set, domino, random, top, bottom

domino_set = [];

domino = {};

(function makeDominos () {
  dominoGenerator();

  console.log(domino_set);

})()

function dominoGenerator() {

  for (let y = 0; y <= 9; y++) {
    domino.bottom = y;

    for (let x = 0; x <= y; x++) {
      domino.top = x;

      domino_set.push(domino);
    }

  }

}

function randomNum() { 
  random = Math.floor(Math.random() * 10);
  return random;
}