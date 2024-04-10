window.addEventListener("load", () => {
  const hero = document.querySelector("#hero");
  hero.classList.add("reduct"); // Adiciona a classe "reduct" ao elemento #hero
  const linksInsideHero = hero.querySelectorAll("a"); // Seleciona todos os links dentro de #hero
  linksInsideHero.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Impede o comportamento padrão do clique no link
    });
  });
});
