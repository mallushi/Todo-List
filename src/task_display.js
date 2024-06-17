export default function addTaskDisplay(todos, isEdit, currentEditingIndex){
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
            <button class="edit_task" data-project="${project}" data-index="${index}">Edit</button>
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

    document.querySelectorAll('.edit_task').forEach(task_button=> {
        task_button.addEventListener('click', (e)=>{
            const index = e.target.getAttribute('data-index');
            const project = e.target.getAttribute('data-project');
            editTask(todos, project, index);
        })
    })
};

function deleteTask(todos,project, index){
    index = parseInt(index);
    todos = todos.filter((todo, i) => !(todo.project === project && i === index));
    localStorage.setItem("taskdata", JSON.stringify(todos));
    addTaskDisplay(todos);
};

function editTask(todos, project, index, isEdit, currentEditingIndex) {
    index = parseInt(index);
    const currentTask = todos.filter((todo, i) => todo.project === project && i === index)[0];
    
    document.getElementById('title').value = currentTask.title;
    document.getElementById('description').value = currentTask.description;
    document.getElementById('date').value = currentTask.date;
    document.querySelector('#project').value = currentTask.project;
    
    document.querySelectorAll('input[name="priority_radio"]').forEach(radio => {
        if (radio.value === currentTask.priority) {
            radio.checked = true;
        }
    });

    // Show the task dialog and handle form submission for editing
    task_dialog.showModal();
    isEdit = true;
    currentEditingIndex = index;
    document.getElementById('task_submit').value = "Update";
    document.getElementById('task_submit').type = "button";
    document.getElementById('task_submit').addEventListener('click', ()=>{
        currentTask.title = document.getElementById('title').value;
        currentTask.description = document.getElementById('description').value;
        currentTask.date = document.getElementById('date').value;
        currentTask.project = document.querySelector('#project').value;
        currentTask.priority = document.querySelector('input[name="priority_radio"]:checked').value;

        localStorage.setItem("taskdata", JSON.stringify(todos));
        addTaskDisplay(todos);
        task_dialog.close();
    })
};