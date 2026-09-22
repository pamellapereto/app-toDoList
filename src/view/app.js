import Cadastro  from "./pages/Cadastro.js";

/*Selecionada div presente no doc HTML pelo nome
de seu id, por isso o uso de #*/
const app = document.querySelector("#app");

const pageCadastro = Cadastro();

app.appendChild(pageCadastro);