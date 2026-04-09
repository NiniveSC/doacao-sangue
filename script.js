const doadores = [];

const form = document.getElementById("formDoacao");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value;
    const idade = parseInt(document.getElementById("idade").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const tipoSanguineo = document.getElementById("tipoSanguineo").value;
    const telefone = document.getElementById("telefone").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;

    if (nome.split(" ").length < 2) {
        alert("Digite nome e sobrenome.");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Email inválido.");
        return;
    }

    if (idade < 16) {
        alert("Idade mínima para doar é 16 anos.");
        return;
    }

    if (peso < 50) {
        alert("Peso mínimo para doação é 50kg.");
        return;
    }

    if (!tipoSanguineo) {
        alert("Selecione o tipo sanguíneo.");
        return;
    }

    if (isNaN(telefone)) {
        alert("Telefone deve conter apenas números.");
        return;
    }

    if (!cidade || !estado) {
        alert("Preencha todos os campos.");
        return;
    }

    const doador = {
        nome: nome,
        email: email,
        idade: idade,
        peso: peso,
        tipoSanguineo: tipoSanguineo,
        telefone: telefone,
        cidade: cidade,
        estado: estado
    };

    doadores.push(doador);

    alert(`
    Cadastro realizado com sucesso!

    Nome: ${nome}
    Email: ${email}
    Idade: ${idade}
    Peso: ${peso} kg
    Tipo Sanguíneo: ${tipoSanguineo}
    Telefone: ${telefone}
    Cidade: ${cidade}
    Estado: ${estado}
    `);

    console.log(doadores);

    form.reset();
});
