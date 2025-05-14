function updateCountdown() {
    // Data de referência: 27 de maio de 2025 às 00:00
    const targetDate = new Date('May 27, 2025 00:00:00').getTime();

    // Data e hora atual
    const now = new Date().getTime();

    // Calculando a diferença em milissegundos
    const difference = targetDate - now;

    // Calculando as horas, minutos e segundos restantes
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Atualizando o HTML com o número de horas, minutos e segundos restantes
    document.getElementById('horas').innerText = `${hours} : ${minutes} : ${seconds}`;

    // Atualiza a cada 1 segundo
    setTimeout(updateCountdown, 1000);
}

// Inicia o cronômetro
updateCountdown();
