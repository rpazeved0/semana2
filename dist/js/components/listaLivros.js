import GravaLivros from "../types/GravaLivro.js";
const elementoRegistroCadastroLivro = document.querySelector(".extrato .registro-transacoes");
renderizarLivros();
function renderizarLivros() {
    const gruposTransacoes = GravaLivros.getGruposTransacoes();
    elementoRegistroCadastroLivro.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.livros) {
            //            <strong>Publicação: </strong>${formatarData(transacao.publicacao, FormatoData.PADRAO)}<BR><BR>
            htmlTransacaoItem += `
                <div class="transacao-item">
                        <span class="tipo"><strong>Título:</strong> ${transacao.titulo}<BR>
                                           <strong>Autor: </strong>${transacao.autor}<BR>
                                           <strong>Publicação: </strong>${transacao.publicacao}<BR><BR>
                        </span>
                </div>
            `;
        }
        htmlRegistroTransacoes += `
                ${htmlTransacaoItem}
        `;
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há livros cadastrados.</div>";
    }
    elementoRegistroCadastroLivro.innerHTML = htmlRegistroTransacoes;
}
const ListarLivros = {
    atualizar() {
        renderizarLivros();
    }
};
export default ListarLivros;
