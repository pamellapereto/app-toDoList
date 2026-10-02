const TextArea = ({ label, id, placeholder = "", required = false }) => {
    const campo = document.createElement('div');
    campo.classList.add("campo");
    const labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", id);
    labelElemento.textContent = label;
    campo.appendChild(labelElemento);
    const inputElemento = document.createElement("textarea");
    inputElemento.placeholder = placeholder;
    inputElemento.id = id;
    inputElemento.required = required;
    inputElemento.name = id;
    campo.appendChild(inputElemento);
    return campo;

}
export default TextArea;