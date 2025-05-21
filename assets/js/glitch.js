const canvas = document.getElementById("glitchCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Resize se o usuário mudar a janela
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function drawGlitch() {
  // Efeito "fantasma" (mantém um pouco do frame anterior)
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Vários retângulos pequenos piscando
  for (let i = 0; i < 70; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const width = Math.random() * 60 + 5;
    const height = Math.random() * 2 + 1;

    // Tons roxo-azulados
    const r = 150 + Math.random() * 105;
    const g = 0 + Math.random() * 30;
    const b = 255;

    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.random()})`;
    ctx.fillRect(x, y, width, height);
  }

  requestAnimationFrame(drawGlitch);
}

drawGlitch();