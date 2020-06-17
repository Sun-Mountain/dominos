var domino_set

domino_set = [];


(function generateDominos () {

  for (var y = 0; y <= 9; y++) {
    for (var x = 0; x <= y; x++) {
      domino_set.push({"top": x, "bottom": y});
    }
  }

  console.log(domino_set);

})()