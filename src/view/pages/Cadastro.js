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

    form.appendChild(inputNome);
    form.appendChild(inputEmail);
    form.appendChild(inputPassword);
    form.appendChild(inputConfirmPassword);
    form.appendChild(btRegister);
    form.appendChild(btBackLogin);
    container.appendChild(form);
    frame.appendChild(container);
    return frame;

    async function enviarDados(valores) {
        const resposta = await fetch(
            "http://localhost:3000/cadastrar",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(valores)
            }
        );
        const dados = await resposta.json();
        console.log(dados);
        return dados;
    }
}
export default Cadastro;

