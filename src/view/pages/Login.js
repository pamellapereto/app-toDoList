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
        onClick: () => {
            const app = document.querySelector("#app");
            app.replaceChildren(Tarefas());
        }
    });

    const btRegister = Button({
        label: "Criar conta",
        onClick: () => {
            const app = document.querySelector("#app");
            app.replaceChildren(Cadastro());
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

