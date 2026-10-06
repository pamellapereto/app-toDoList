import Button from "../components/Button.js";
import Input from "../components/Input.js";
import Tarefas from "./Tarefas.js";
import Cadastro from "./Cadastro.js";

const Login = () => {
    const frame = document.createElement("div");
    frame.classList.add("frame");

    const container = document.createElement("section");
    container.classList.add("login-container");

    const form = document.createElement("form");
    form.id = "login-form";

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

    const btLogin = Button({
        label: "Entrar",
        type: "submit"
    });

    const btRegister = Button({
        label: "Criar conta",
        onClick: () => {
            const app = document.querySelector("#app");
            app.replaceChildren(Cadastro());
        }
    });

    //método de monitorar a interação do usuário com o formulário (addEventListener())
    form.addEventListener("submit", async (e) => {
        //Obter o valor dos inputs e mandar para a API ("http://localhost:3000/autenticacao/login")
        //Envio dos dados para registro
        e.preventDefault();
        const email = form.elements.email.value.trim();
        const senha = form.elements.senha.value.trim();
        const usuario = {
            email,
            senha
        };
        try {
            const resposta = await fetch(
                "http://localhost:3000/autenticacao/login",
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
                    "Erro ao logar!"
                );
                return;
            }
            localStorage.setItem(
                "chave-token",            //key do localStorage
                confirmacao.token        //Valor do token a ser armazenado (sequencia de caracteres aleatoria)
            );
            localStorage.setItem(
                "chave-infos-usuario",
                JSON.stringify(confirmacao.usuarioId)
            );
            alert("Login realizado com sucesso!");
            const app = document.querySelector("#app");
            app.replaceChildren(Tarefas());
            return confirmacao;
        }
        catch (erro) {
            console.error(erro);
            alert("Erro ao logar!");
        }
    });

    form.appendChild(inputEmail);
    form.appendChild(inputPassword);
    form.appendChild(btLogin);
    form.appendChild(btRegister);
    container.appendChild(form);
    frame.appendChild(container);
    return frame;
};

export default Login;

