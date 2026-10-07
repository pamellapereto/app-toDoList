import Button from "../components/Button.js";
import Input from "../components/Input.js";
import TextArea from "../components/TextArea.js";
import Select from "../components/Select.js";
import KanbanTaskCard from "../components/KanbanTaskCard.js";

const Tarefas = () => {
    const categoryOptions = [
        { value: "", label: "Sem categoria" },
        { value: "Trabalho", label: "Trabalho" },
        { value: "Estudos", label: "Estudos" },
        { value: "Pessoal", label: "Pessoal" }
    ];
    const statusOptions = [
        { value: "tarefa", label: "Tarefa" },
        { value: "execucao", label: "Em Execução" },
        { value: "finalizado", label: "Finalizado" }
    ];
    const tasks = [];
    let nextTaskId = 1;

    const frame = document.createElement("main");
    frame.classList.add("kanban-page");

    const container = document.createElement("section");
    container.classList.add("kanban-container");

    const title = document.createElement("h1");
    title.classList.add("tasks-title");
    title.textContent = "Minhas tarefas";

    const form = document.createElement("form");
    form.classList.add("task-form");

    const titleInput = Input({
        label: "Título",
        id: "titulo",
        placeholder: "Digite o título da tarefa"
    });

    const categorySelect = Select({
        label: "Categoria",
        id: "categoria",
        options: categoryOptions
    });
    const addButton = Button({
        label: "Adicionar",
        type: "submit"
    });

    const board = document.createElement("div");
    board.classList.add("kanban-board");

    const columns = {};
    statusOptions.forEach(({ value, label }) => {
        const column = document.createElement("section");
        column.classList.add("kanban-column");

        const heading = document.createElement("h2");
        heading.classList.add("kanban-column-title");
        heading.textContent = label;

        const taskList = document.createElement("div");
        taskList.classList.add("kanban-task-list");
        taskList.setAttribute("aria-label", `Tarefas: ${label}`);

        column.addEventListener("dragover", (event) => {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move";
        });

        column.addEventListener("drop", (event) => {
            event.preventDefault();
            const taskId = Number(event.dataTransfer.getData("text/plain"));
            const task = tasks.find((item) => item.id === taskId);
            if (!task || task.status === value) return;

            task.status = value;
            renderTasks();
        });

        column.append(heading, taskList);
        board.appendChild(column);
        columns[value] = taskList;
    });

    const renderTasks = () => {
        Object.values(columns).forEach((column) => column.replaceChildren());

        tasks.forEach((task) => {
            columns[task.status].appendChild(KanbanTaskCard({
                task,
                onEdit: (selectedTask) => {
                    const titulo = window.prompt(`Editar título da tarefa: "${selectedTask.titulo}"`);
                    if (titulo === null || !titulo.trim()) return;

                    selectedTask.titulo = titulo.trim();
                    renderTasks();
                },
                onDelete: (selectedTask) => {
                    const confirmed = window.confirm(`Deseja excluir a tarefa "${selectedTask.titulo}"?`);
                    if (!confirmed) return;

                    const taskIndex = tasks.findIndex((item) => item.id === selectedTask.id);
                    if (taskIndex !== -1) tasks.splice(taskIndex, 1);
                    renderTasks();
                }
            }));
        });
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const titulo = form.elements.titulo.value.trim();
        const categoria = form.elements.categoria.value;
        if (!titulo) return;

        tasks.push({
            id: nextTaskId++,
            titulo,
            categoria,
            status: "tarefa",
            criadaEm: new Date().toISOString()
        });
        const tarefa = {
            titulo
        }

        renderTasks();
        form.reset();
        form.elements.titulo.focus();
    });

    form.append(titleInput, categorySelect, addButton);
    container.append(title, form, board);
    frame.appendChild(container);
    return frame;
};

export default Tarefas;
