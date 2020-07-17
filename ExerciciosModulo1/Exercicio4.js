function experiencia(anos) {
  var anosEstudo = 0;
  switch (true) {
    case anos >= 0 && anos <= 1:
      return console.log("Iniciante");
    case anos > 1 && anos <= 3:
      return console.log("Intermediário");
    case anos > 3 && anos <= 6:
      return console.log("Avançado");
    default:
      return console.log("Jedi Master");
  }
}

var anosEstudo = 7;
experiencia(anosEstudo);