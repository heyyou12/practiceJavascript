let texto = "hola manuel...feliz dia";

const hablar = (texto) => {
  speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
};

hablar(texto);
