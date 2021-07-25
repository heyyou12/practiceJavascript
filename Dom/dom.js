//clase padre cards
const $cards = document.querySelector(".cards");

const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figcaption = document.createElement("figcaption");
const $figcaptionText = document.createTextNode("Animals");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "animals");
$figure.classList.add("card");

$figure.appendChild($img);
$figure.appendChild($figcaption);
$figcaption.appendChild($figcaptionText);

$cards.appendChild($figure);

console.log($cards.children[3]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild);

const estaciones = ["primavera", "verano", "otoño", "invierno"];
const $ul = document.createElement("ul");

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

const continentes = ["america", "africa", "oceania", "europa", "asia"],
  $ul2 = document.createElement("ul");

document.write("<h3>estaciones del año</h3>");

document.body.appendChild($ul2);
//$ul2.innerHTML = "";

continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));
