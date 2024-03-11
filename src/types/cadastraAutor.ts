import { Autor } from "./Autor.js";
import { GrupoAutor } from "./GrupoAutor.js";

const autores: Autor[] = JSON.parse(localStorage.getItem("autores"), (key: string, value: string) => {
    if (key === "data") {
        return new Date(value);
    }

    return value;
}) || [];

const CadastroAutor = {
    getGruposAutores(): GrupoAutor[] {
        const gruposAutores: GrupoAutor[] = [];
        const listaAutores: Autor[] = structuredClone(autores);
        const autoresOrdenados: Autor[] = listaAutores.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoAutor: string = "";

        for (let autor of autoresOrdenados) {
            let labelGrupoAutor: string = autor.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoAutor != labelGrupoAutor) {
                labelAtualGrupoAutor = labelGrupoAutor;
                gruposAutores.push({
                    label: labelGrupoAutor,
                    autores: []
                });
            }
            gruposAutores.at(-1).autores.push(autor);
        }

        return gruposAutores;
    },
    
    registrarAutor(novoAutor: Autor): void {
        autores.push(novoAutor);   
        localStorage.setItem("autores", JSON.stringify(autores));
    }
}

export default CadastroAutor;