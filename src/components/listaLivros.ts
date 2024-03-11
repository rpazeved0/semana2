import GravaLivros from "../types/GravaLivro.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";

const elementoRegistroCadastroLivro: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarLivros();
function renderizarLivros(): void {
    const gruposTransacoes: GrupoTransacao[] = GravaLivros.getGruposTransacoes();
    elementoRegistroCadastroLivro.innerHTML = "";
    let htmlRegistroTransacoes: string = "";

    for (let grupoTransacao of gruposTransacoes)
    {
        let htmlTransacaoItem: string = "";
        for (let transacao of grupoTransacao.livros)
        {
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
    atualizar(): void {
        renderizarLivros();
    }
}
export default ListarLivros;