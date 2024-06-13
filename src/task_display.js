export default function addTaskDisplay(todos){
    const task_display = document.getElementById('task_display');
    task_display.innerHTML = '';
    const groupedTodos = todos.reduce((acc, todo) => {
        const key = todo.project;
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(todo);
        return acc;
    }, {});
    
    Object.keys(groupedTodos).forEach(project => {
        const tasksHTML = groupedTodos[project].map((todo, index) => `
            <li>
                <strong>Title:</strong> ${todo.title} <br>
                <strong>Description:</strong> ${todo.description} <br>
                <strong>Date:</strong> ${todo.date} <br>
                <strong>Priority:</strong> ${todo.priority}
            </li>
            <button>View</button>
            <button>Edit</button>
            <button class="delete_task" data-project="${project}" data-index="${index}">Delete</button>
        `).join('');
        const projectHTML = `
            <div>
                <h3>${project}</h3>
                <ul>${tasksHTML}</ul>
            </div>
        `;
        task_display.innerHTML += projectHTML;
    });

    document.querySelectorAll('.delete_task').forEach(button => {
        button.addEventListener('click', (e)=>{
            const project = e.target.getAttribute('data-project');
            const index = e.target.getAttribute('data-index');
            deleteTask(todos, project, index);
        });
    });
};

function deleteTask(todos,project, index){
    index = parseInt(index);
    todos = todos.filter((todo, i) => !(todo.project === project && i === index));
    localStorage.setItem("taskdata", JSON.stringify(todos));
    addTaskDisplay(todos);
};