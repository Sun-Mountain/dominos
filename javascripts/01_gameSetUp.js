var domino_set, box, top_dots, top_bottom

domino_set = [];

set = document.getElementById("set");

(function gameSetUp () {

  generateDominoSet();

})();

function generateDominoSet() {
  for (var y = 0; y <= 9; y++) {
    for (var x = 0; x <= y; x++) {
      domino_set.push({"top": x, "bottom": y});
    }
  }
  // domino_set.forEach(buildDominos);
};

function buildDominos(item, index, player_hand) {
  // variables
  top_dots = item.top;
  bottom_dots = item.bottom;

  // create container
  domino_container = document.createElement("DIV");
  domino_container.classList.add("domino__container");

  // create domino frame
  domino_body = document.createElement("DIV");
  domino_body.classList.add("domino-body");
  domino_body.classList.add("domino-" + index);
  domino_container.appendChild(domino_body);

  // create halves
  for(var i = 1; i < 3; i++){
    domino_half = document.createElement("DIV");
    domino_half.classList.add("domino-half");

    dot_container = document.createElement("DIV");
    dot_container.classList.add("domino-dot__grid");
    domino_half.appendChild(dot_container);

    if (i % 2 == 1) {
      domino_half.classList.add("domino-body-top");
      dot_container.classList.add("dot-count-" + top_dots);

      for(var j = 1; j <= top_dots; j++) {
        dot = document.createElement("DIV");
        dot.classList.add("dot");
        dot.setAttribute("id", "dot-" + j);
        dot_container.appendChild(dot);
      }
    } else {
      domino_half.classList.add("domino-body-bottom");
      dot_container.classList.add("dot-count-" + bottom_dots);

      for(var k = 1; k <= bottom_dots; k++) {
        dot = document.createElement("DIV");
        dot.classList.add("dot");
        dot.setAttribute("id", "dot-" + k);
        dot_container.appendChild(dot);
      }
    }

    domino_body.appendChild(domino_half);
  }

  // make domino
  document.getElementById(player_hand).appendChild(domino_container);
};
