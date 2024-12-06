// 1.OBJETOS
//Objeto da História

const story = {
    start: {
      text: "You find yourself in a dense forest. The path splits into two directions. What will you do?",
      options: [
        { text: "Go left", next: "cabin" },
        { text: "Go right", next: "river" },
      ],
    },
    cabin: {
      text: "You see a mysterious cabin with lights on. What will you do?",
      options: [
        { text: "Knock on the door", next: "happyEnding" },
        { text: "Keep walking", next: "trapEnding" },
      ],
    },
    river: {
      text: "You find a river with a strong current. What will you do?",
      options: [
        { text: "Try to cross it", next: "neutralEnding" },
        { text: "Walk along the river", next: "happyEnding" },
      ],
    },
    happyEnding: {
      text: "You made a wise choice and reached safety. Congratulations!",
      options: [],
    },
    trapEnding: {
      text: "You fall into a trap set by hunters. Better luck next time.",
      options: [],
    },
    neutralEnding: {
      text: "You are carried by the current but wake up in a safe village.",
      options: [],
    },
  };
  
  // Seleciona os elementos do DOM
  const textElement = document.getElementById("text");
  const option1Button = document.getElementById("option1");
  const option2Button = document.getElementById("option2");
  
  // Função para atualizar a história
  const updateStory = (node) => {
    
  
    const current = story[node]; // Obtém o nó atual da história
    textElement.innerText = current.text; // Atualiza o texto principal
  
    console.log("Current Options:", current.options);
    if (current.options.length > 0) {
      option1Button.innerText = current.options[0].text;
      option2Button.innerText = current.options[1].text;
  
      // Configura os eventos de clique nos botões
      option1Button.onclick = () => updateStory(current.options[0].next);
      option2Button.onclick = () => updateStory(current.options[1].next);
      
    } else {
      // Esconde os botões se não houver mais opções
      option1Button.style.display = "none";
      option2Button.style.display = "none";
    }
  };
  
  // Inicializa a história
  updateStory("start");
  
