const KanbanTaskCard = ({ task, onEdit, onDelete }) => {
    const card = document.createElement("article");
    card.classList.add("task-card", "kanban-task-card");
    card.draggable = true;
    card.setAttribute("aria-label", `Tarefa arrastável: ${task.titulo}`);

    card.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", String(task.id));
        event.dataTransfer.effectAllowed = "move";
    });

    const header = document.createElement("div");
    header.classList.add("kanban-task-header");

    const titleGroup = document.createElement("div");
    titleGroup.classList.add("kanban-task-title-group");

    const editButton = document.createElement("button");
    editButton.classList.add("kanban-task-action", "kanban-task-edit");
    editButton.type = "button";
    editButton.textContent = "✎";
    editButton.setAttribute("aria-label", `Editar tarefa: ${task.titulo}`);
    editButton.title = "Editar tarefa";
    editButton.addEventListener("click", (event) => {
        event.stopPropagation();
        onEdit(task);
    });

    const title = document.createElement("p");
    title.classList.add("kanban-task-title");
    title.textContent = task.titulo;
    titleGroup.append(editButton, title);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("kanban-task-action", "kanban-task-delete");
    deleteButton.type = "button";
    deleteButton.textContent = "×";
    deleteButton.setAttribute("aria-label", `Excluir tarefa: ${task.titulo}`);
    deleteButton.title = "Excluir tarefa";
    deleteButton.addEventListener("click", (event) => {
        event.stopPropagation();
        onDelete(task);
    });

    header.append(titleGroup, deleteButton);
    card.appendChild(header);

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

    const createdAt = document.createElement("time");
    createdAt.classList.add("kanban-task-created-at");
    createdAt.dateTime = task.criadaEm;
    createdAt.textContent = `Criada em ${new Date(task.criadaEm).toLocaleDateString("pt-BR")}`;
    card.appendChild(createdAt);

    return card;
};

export default KanbanTaskCard;
