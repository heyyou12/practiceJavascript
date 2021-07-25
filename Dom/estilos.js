let $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style.color);
console.log($linkDOM.getAttribute("style"));
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//para establecer valores
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
