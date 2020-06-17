var domino_set, box

domino_set = [];

set = document.getElementById("set");


(function generateDominos () {

  for (var y = 0; y <= 9; y++) {
    for (var x = 0; x <= y; x++) {
      domino_set.push({"top": x, "bottom": y});
    }
  }

  domino_set.forEach(makeDomino);

})()


function makeDomino(item) {
  // create container
  domino_container = document.createElement("DIV");
  domino_container.classList.add("domino__container");

  // create domino frame
  domino_body = document.createElement("DIV");
  domino_body.classList.add("domino-body");
  domino_container.appendChild(domino_body);

  // create halves
  for(var i = 1; i <= 2; i++){
    domino_half = document.createElement("DIV");
    domino_half.classList.add("domino-half");

    if (i % 2 == 1) {
      domino_half.classList.add("domino-body-top");
    } else {
      domino_half.classList.add("domino-body-bottom");
    }

    domino_body.appendChild(domino_half);
  }



  // make domino
  document.getElementById("box_of_dominos").appendChild(domino_container);
}