document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar que o formulário seja enviado e recarregue a página

    // Obter os valores dos campos
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);

    // Verificar se todos os campos foram preenchidos
    if (!nome || isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Calcular a média
    const media = (nota1 + nota2) / 2;

    // Determinar o status (Aprovado ou Reprovado)
    const status = media >= 6 ? "Aprovado" : "Reprovado";

    // Criar uma nova linha na tabela
    const tabela = document.getElementById("tabelaResultados").getElementsByTagName("tbody")[0];
    const novaLinha = tabela.insertRow();

    // Adicionar as células
    novaLinha.innerHTML = `
        <td>${nome}</td>
        <td>${nota1}</td>
        <td>${nota2}</td>
        <td>${media.toFixed(2)}</td>
        <td class="${status.toLowerCase()}">${status}</td>
    `;

    // Limpar os campos do formulário
    document.getElementById("formCadastro").reset();
});
