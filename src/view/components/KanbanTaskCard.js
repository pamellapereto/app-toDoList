const KanbanTaskCard = ({ task, onDelete, onEdit }) => {
    const card = document.createElement("article");
    card.classList.add("task-card", "kanban-task-card", "categoria-" + task.categoria.toLowerCase());
    card.draggable = true;
    card.setAttribute("aria-label", `Tarefa arrastável: ${task.titulo}`);

    card.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", String(task.id));
        event.dataTransfer.effectAllowed = "move";
    });

    const btClose = document.createElement("a");
    btClose.classList.add("kanban-task-close");
    btClose.textContent = "x"; //-> btClose.innerHTML = "x";
    btClose.addEventListener("click", () => {
        onDelete(task);
    });
    card.appendChild(btClose);

    const btEdit = document.createElement("a");
    btEdit.classList.add("kanban-task-edit");
    btEdit.textContent = "✏️";
    btEdit.addEventListener("click", () => {
        onEdit(task);
    });
    card.appendChild(btEdit);

    const title = document.createElement("p");
    title.classList.add("kanban-task-title");
    title.textContent = task.titulo;
    card.appendChild(title);    

    if (task.descricao) {
        const description = document.createElement("p");
        description.classList.add("task-description");
        description.textContent = task.descricao;
        card.appendChild(description);
    }

    if (task.categoria) {
        const category = document.createElement("p");
        category.classList.add("task-category");
        category.textContent = `Categoria: ${task.categoria}`;
        card.appendChild(category);
    }

    return card;
};

export default KanbanTaskCard;
