const Input = ({label, type="text", id, placeholder=""}) => {
    const campo = document.createElement('div');
    campo.classList.add("campo");
    const labelElemento = document.createElement("label");
    labelElemento.setAttribute("for", id);
    labelElemento.textContent = label;
    campo.appendChild(labelElemento);
    const inputElemento = document.createElement("input");
    inputElemento.type = type;
    inputElemento.placeholder = placeholder;
    inputElemento.id = id;
    inputElemento.required = true;
    inputElemento.name = id;
    campo.appendChild(inputElemento);
    return campo;

}
export default Input;