    const morseCode = ".... - - .--. ... -..-. -..-. ... . -.-. .-. . - -....- -.-- . .- .-. ... .-.-.- ...- . .-. -.-. . .-.. .-.-.- .- .--. .--. -..-. --- -..- ... --.- .-- -.- -. -.-- ... -.-. .-.-.- .... - -- .-..";

    const box = document.getElementById("box");
    const UNIT = 200; // tempo base (ajustável)
    const sequence = [];

    for (let char of morseCode) {
      if (char === ".") {
        sequence.push({ on: true, duration: UNIT }); // ponto
        sequence.push({ on: false, duration: UNIT }); // pausa curta
      } else if (char === "-") {
        sequence.push({ on: true, duration: UNIT * 3 }); // traço
        sequence.push({ on: false, duration: UNIT }); // pausa curta
      } else if (char === " ") {
        sequence.push({ on: false, duration: UNIT * 3 }); // pausa entre letras
      }
    }

    let index = 0;
    function playSequence() {
      if (index >= sequence.length) {
        index = 0;
        setTimeout(playSequence, UNIT * 7); // pausa entre repetições
        return;
      }

      const step = sequence[index];
      box.classList.toggle("on", step.on);

      setTimeout(() => {
        index++;
        playSequence();
      }, step.duration);
    }

    playSequence();