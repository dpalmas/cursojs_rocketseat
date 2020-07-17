var usuarios = [
  {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

function showMessage(usuarios) {
  for (let user of usuarios) {
    var { nome, habilidades } = user;
    console.log("O " + nome +  " possui as habilidades: " + habilidades.join([', ']));
  }
};

showMessage(usuarios);
console.log(showMessage);

