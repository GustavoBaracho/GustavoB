document.addEventListener("DOMContentLoaded ", () => {  
    const links = document.querySelectorAll("header nav ul li a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        console.log(` Você clicou no link: ${link.textContent}`);
      });
    });
    const form = document.querySelector("form");
    form.addEventListener("submit", event => {
      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();
      if (!nome || !email || !mensagem) {
        event.preventDefault(); 
        alert(" Preencha todos os campos.");
      }
    });
  });
  
