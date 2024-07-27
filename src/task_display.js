export default function addTaskDisplay(todos, isEdit= false, currentEditingIndex = null){
    const project_display = document.getElementById('project_display');

    project_display.addEventListener('click', function(e) {
        if (e.target.closest('.project_container')) {
            const projectid = e.target.getAttribute('data-id'); // Use data-id to store project ID
            console.log("Clicked project ID:", projectid);
            displayTodosByProject(projectid);
        }
    });

    function displayTodosByProject(projectid) {
        console.log("this is todos:",todos)
        const filteredTodos = todos.filter(todo => todo.projectId === projectid);
        console.log("Filtered todos:", filteredTodos);
        const task_display = document.getElementById('task_display');
        task_display.innerHTML = '';

        filteredTodos.forEach((todo, index) => {
            const tasksHTML =`
                <li>
                    <strong>Title:</strong> ${todo.title} <br>
                    <strong>Description:</strong> ${todo.description} <br>
                    <strong>Date:</strong> ${todo.date} <br>
                    <strong>Priority:</strong> ${todo.priority}
                </li>
                <button>View</button>
                <button class="edit_task" data-project="${todo.projectId}" data-index="${index}">Edit</button>
                <button class="delete_task" data-project="${todo.projectId}" data-index="${index}">Delete</button>
            `
            task_display.innerHTML += tasksHTML;
        })

        document.querySelectorAll('.delete_task').forEach(button => {
            button.addEventListener('click', (e)=>{
                const project = e.target.getAttribute('data-project');
                const index = e.target.getAttribute('data-index');
                deleteTask(project, index);
            });
        });

        document.querySelectorAll('.edit_task').forEach(task_button=> {
            task_button.addEventListener('click', (e)=>{
                const index = e.target.getAttribute('data-index');
                const project = e.target.getAttribute('data-project');
                editTask(project, index);
            })
        })
    };
};

function deleteTask(todos,project, index){
    index = parseInt(index);
    todos = todos.filter((todo, i) => !(todo.projectId == project && i === index));
    localStorage.setItem("taskdata", JSON.stringify(todos));
    addTaskDisplay(todos);
};

function editTask(todos, project, index) {
    index = parseInt(index);
    const currentTask = todos.filter((todo, i) => todo.projectId == project && i === index)[0];
    
    document.getElementById('title').value = currentTask.title;
    document.getElementById('description').value = currentTask.description;
    document.getElementById('date').value = currentTask.date;
    document.querySelector('#project').value = currentTask.projectId;
    
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
        displayTodosByProject(currentTask.projectId);
        task_dialog.close();
    }, {once: true});
};
