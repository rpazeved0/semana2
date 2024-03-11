import { Autor } from "../types/Autor.js";
import { validEmail } from "../utils/functions.js";
import CadastroAutor from "../types/cadastraAutor.js";
import AutorComponent from "./autores-componente.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event){
    try 
    {
        event.preventDefault();

        if (!elementoFormulario.checkValidity()){
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const inputNome = elementoFormulario.querySelector("#nome") as HTMLInputElement;
        const inputEmail = elementoFormulario.querySelector("#email") as HTMLInputElement;
        const inputBiografia = elementoFormulario.querySelector("#biografia") as HTMLInputElement;

        let nome = inputNome.value;
        let email = inputEmail.value;
        let biografria = inputBiografia.value;

        if (!validEmail(email)){
            alert("E-mail inválido!");
            return;
        }

        if ( biografria.length > 500){
            alert("O campo biografia deve ter entre 100 e 500 caracteres!");
            return;
        }

        const novoAutor: Autor = {
            nome: nome,
            email: email, 
            biografia: biografria,
            data: new Date(),
        }
        
        CadastroAutor.registrarAutor(novoAutor);
        
        AutorComponent.atualizar();
        console.log(novoAutor);

        elementoFormulario.reset();
    }
    catch(erro) {
        alert(erro.message);
    }
});