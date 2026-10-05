import Input from "../components/Input.js";
import Button from "../components/Button.js";
import Login from "./Login.js";

const Cadastro = () => {
    const frame = document.createElement("div");
    frame.classList.add("frame");

    const container = document.createElement("div");
    container.classList.add("cadastro-container");

    const form = document.createElement("form");
    form.id = "cadastro-form";

    const inputNome = Input({
        label: "Nome",
        type: "text",
        id: "nome",
        placeholder: "Digite seu nome"
    });
    const inputEmail = Input({
        label: "E-mail",
        type: "email",
        id: "email",
        placeholder: "Digite seu e-mail"
    });

    const inputPassword = Input({
        label: "Senha",
        type: "password",
        id: "senha",
        placeholder: "Digite sua senha"
    });
    const inputConfirmPassword = Input({
        label: "Confirmar senha",
        type: "password",
        id: "confirmar-senha",
        placeholder: "Digite novamente sua senha"
    });

    const btRegister = Button({
        label: "Cadastrar",
        type: "submit"
    });
    const btBackLogin = Button({
        label: "Já tenho conta",
        onClick: () => {
            const app = document.querySelector("#app");
            app.replaceChildren(Login());
        }
    });

    //Envio dos dados para registro
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = form.elements.nome.value.trim();
        const email = form.elements.email.value.trim();

        const senha = form.elements.senha.value.trim();
        const confirmarSenha = form.elements["confirmar-senha"].value.trim();

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }
        const usuario = {
            nome,
            email,
            senha
        };
        try {
            const resposta = await fetch(
                "http://localhost:3000/autenticacao/cadastrar",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(usuario)
                }
            );
            const confirmacao = await resposta.json();
            if (!resposta.ok) {
                alert(
                    "Erro ao cadastrar usuário!"
                );
                return;
            }
            alert("Cadastro realizado com sucesso!");
            
            const app = document.querySelector("#app");
            app.replaceChildren(Login());

            return confirmacao;
        }
        catch (erro) {
            console.error(erro);
            alert("Erro ao se cadastrar. Servidor indisponível!");
        }
    });


    form.appendChild(inputNome);
    form.appendChild(inputEmail);
    form.appendChild(inputPassword);
    form.appendChild(inputConfirmPassword);
    form.appendChild(btRegister);
    form.appendChild(btBackLogin);
    container.appendChild(form);
    frame.appendChild(container);
    return frame;

}
export default Cadastro;

