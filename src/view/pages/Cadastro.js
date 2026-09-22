import Input from "../components/Input.js";

const Cadastro = () => {
    const frame = document.createElement("div");
    frame.style.display = "flex";
    frame.style.justifyContent = "center";
    frame.style.height = "100vh";
    frame.style.alignItems = "center";

    const container = document.createElement("div");
    container.classList.add("cadastro-container");
    container.style.backgroundColor = "#fff";
    container.style.minHeight = "calc(100vh - 450px)";
    container.style.width = "calc(100vh - 250px)";
    container.style.borderRadius = "30px";
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

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

    form.appendChild(inputNome);
    form.appendChild(inputEmail);
    form.appendChild(inputPassword);
    form.appendChild(inputConfirmPassword);
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