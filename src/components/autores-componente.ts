import { FormatoData } from "../types/FormatoData.js";
import { GrupoAutor } from "../types/GrupoAutor.js";
import CadastroAutor from "../types/cadastraAutor.js";
import { formatarData } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarAutores();
function renderizarAutores(): void {
    const gruposAutores: GrupoAutor[] = CadastroAutor.getGruposAutores();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes: string = "";

    for (let grupoAutor of gruposAutores)
    {
        let htmlTransacaoItem: string = "";
        for (let autor of grupoAutor.autores)
        {
            htmlTransacaoItem += `
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${autor.nome}</span>
                        <span class="tipo">${autor.email}</span>
                        <span class="tipo">${autor.biografia}</span>
                        <time class="data">${autor.data.toLocaleDateString("pt-br")}</time>
                    </div>
                    
                </div>
            `;
        }

        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupoAutor.label}</strong>
                ${htmlTransacaoItem}
            </div>
        `;
    }

    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há transações registradas.</div>";
    }

    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
    
}

const AutorComponent = {
    atualizar(): void {
        renderizarAutores();
    }
}

export default AutorComponent;
