const doadores = [];

const form = document.getElementById("formDoacao");

form.addEventListener("submit", function (event)) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value;
    const idade = parseInt(document.getElementById("idade").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const tipoSanguineo = document.getElementById("tipoSanguineo").value;
    const telefone = document.getElementById("telefone").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;





}