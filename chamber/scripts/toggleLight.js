const modeButton = document.querySelector("#toggleLight");
const main = document.querySelector("r");

modeButton.addEventListener("click", () => {
  const root = document.documentElement;
  
  // Exemplo de alteração das variáveis CSS

  if (root.style.getPropertyValue('--primary-color') === 'black') {
    root.style.setProperty('--primary-color', 'white');
    root.style.setProperty('--accent-3-color', 'black');
    modeButton.textContent = "🌙";
  }
  else {
    root.style.setProperty('--primary-color', 'black');
    root.style.setProperty('--accent-3-color', 'white');    
    modeButton.textContent = "☀️";
  }
});
