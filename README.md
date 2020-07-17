<h1 align="center">
    <img alt="Starter" title="Starter Course"src=".github/logostarter.png" width="175px" />
    <img alt="Starter" title="Javascript"src=".github/javascript.png" width="190px" />
</h1>

<h3 align="center">
  JS Rocketseat Challenge Excercises :rocket: :astronaut:
</h3>

<p align="center">This project is just exercises of module one of Rocketseat Javascript course <a href="https://skylab.rocketseat.com.br/journey/starter">JavaScript Starter</a>
</p>

<p align="center">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/davipalmas/cursojs_rocketseat?color=0000FF">

  <img alt="License" src="https://img.shields.io/github/license/davipalmas/cursojs_rocketseat?color=0000FF&logo=MIT">
  
  <a href="https://github.com/davipalmas/cursojs_rocketseat/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/davipalmas/cursojs_rocketseat?color=0000FF">
  </a>
</p>

### Exercícios Módulo 01 - Introdução JavaScript

**1° Exercício :pencil:**

Crie uma função que dado o objeto a seguir:

```
var endereco = {
  rua: "Rua dos pinheiros",
  numero: 1293,
  bairro: "Centro",
  cidade: "São Paulo",
  uf: "SP"
};
```

Retorne o seguinte conteúdo:

`O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.`

**2° Exercício :pencil:**

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

```
function pares(x, y) {
// código aqui
}
pares(32, 321);
```

**3° Exercício :pencil:**

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

```
function temHabilidade(skills) {
// código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
```

_Dica: para verificar se um vetor contém um valor, utilize o método indexOf._

**4º Exercício :pencil:**

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```
function experiencia(anos) {
// código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```

**5° Exercício :pencil:**

Dado o seguinte vetor de objetos:

```
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
```

Escreva uma função que produza o seguinte resultado:

`O Diego possui as habilidades: Javascript, ReactJS, Redux` 
`O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir`

_Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join._

## :memo: Licença

Este projeto está licenciado sob a licença [MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/).