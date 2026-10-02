const Select = ({ label, id, options = [], value = "", onChange }) => {
    const field = document.createElement("div");
    field.classList.add("campo");

    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", id);
    labelElement.textContent = label;

    const select = document.createElement("select");
    select.id = id;
    select.name = id;
    select.classList.add("select-input");

    options.forEach(({ value: optionValue, label: optionLabel }) => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionLabel;
        select.appendChild(option);
    });

    select.value = value;
    if (onChange) {
        select.addEventListener("change", () => onChange(select.value));
    }

    field.append(labelElement, select);
    return field;
};

export default Select;
