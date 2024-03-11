import ListaLivros from "./listaLivros.js";
import { ValidarISBN } from "./validaISBN.js";
import GravaLivro from "../types/GravaLivro.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos do formulário!");
            return;
        }
        const inputTitulo = elementoFormulario.querySelector("#titulo");
        const inputSinopse = elementoFormulario.querySelector("#sinopse");
        const inputSumario = elementoFormulario.querySelector("#sumario");
        const inputPreco = elementoFormulario.querySelector("#preco");
        const inputPaginas = elementoFormulario.querySelector("#paginas");
        const inputISBN = elementoFormulario.querySelector("#isbn");
        const inputPublicacao = elementoFormulario.querySelector("#publicacao");
        const inputCategoria = elementoFormulario.querySelector("#categoria");
        const inputAutor = elementoFormulario.querySelector("#autor");
        let titulo = inputTitulo.value;
        let sinopse = inputSinopse.value;
        let sumario = inputSumario.value;
        let preco = parseFloat(inputPreco.value);
        let paginas = parseInt(inputPaginas.value);
        let isbn = inputISBN.value;
        let publicacao = inputPublicacao.valueAsDate;
        let categoria = inputCategoria.value;
        let autor = inputAutor.value;
        let dataatual = new Date();
        if (publicacao <= dataatual) {
            alert("Data da publicação deve ser maior que a data atual!");
            return;
        }
        if (paginas <= 0) {
            alert("As Páginas deve ser maior que zero!");
            return;
        }
        if (sumario.length < 100) {
            alert("O Sumario deve ter no mínimo 100 caracteres!");
            return;
        }
        else if ((sinopse.length > 500)) {
            alert("Sinopse deve ter no máximo 500 caracteres!");
            return;
        }
        if (ValidarISBN(isbn)) {
            alert("ISBN já cadastrado!");
            return;
        }
        const novaTransacao = {
            titulo: titulo,
            sinopse: sinopse,
            sumario: sumario,
            preco: preco,
            paginas: paginas,
            isbn: isbn,
            publicacao: publicacao,
            categoria: categoria,
            autor: autor
        };
        GravaLivro.registrarTransacao(novaTransacao);
        ListaLivros.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
