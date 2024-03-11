const autores = JSON.parse(localStorage.getItem("autores"), (key, value) => {
    if (key === "data") {
        return new Date(value);
    }
    return value;
}) || [];
const CadastroAutor = {
    getGruposAutores() {
        const gruposAutores = [];
        const listaAutores = structuredClone(autores);
        const autoresOrdenados = listaAutores.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoAutor = "";
        for (let autor of autoresOrdenados) {
            let labelGrupoAutor = autor.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
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
    registrarAutor(novoAutor) {
        autores.push(novoAutor);
        localStorage.setItem("autores", JSON.stringify(autores));
    }
};
export default CadastroAutor;
