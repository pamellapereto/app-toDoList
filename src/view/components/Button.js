const Button = ({ label, type = "button", onClick }) => {
    const button = document.createElement("button");
    button.type = type;
    button.textContent = label;
    button.classList.add("botao");

    if (onClick) {
        button.addEventListener("click", onClick);
    }

    return button;
};

export default Button;