import './style.css';
import addProjectDisplay from './project_display';
const task_dialog = document.getElementById('task_dialog');
const project_dialog = document.getElementById('project_dialog');
const add_task = document.getElementById('add_task');
const add_project = document.getElementById('add_project');
const project_close = document.getElementById('project_close');
const task_close = document.getElementById('task_close');
const task_form = document.getElementById('task_form');
const project_form = document.getElementById('project_form');

let todos = [];
let projects = [];
class Project {
    constructor(project_title){
        this.project_title = project_title;
    }
}

add_project.addEventListener('click', ()=>{
    project_dialog.show();
})

project_close.addEventListener('click', ()=>{
    project_dialog.close();
})

project_form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const project_title = document.getElementById('project_title').value;
    const project_object = new Project(project_title);
    projects.push(project_object);
    addProjectDisplay(projects);
    updateProjectSelect();
    project_dialog.close();
    console.log(projects);
})

function updateProjectSelect(){
    const project_options = document.getElementById('project');

    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.project_title;
        option.textContent = project.project_title;
        console.log(option);
        project_options.appendChild(option);
    })
}
class Todo {
    constructor(title, description, date, project, priority){
        this.title = title;
        this.description = description;
        this.date = date;
        this.project = project;
        this.priority = priority;
    }
}

add_task.addEventListener('click', ()=>{
    task_dialog.show();
})

task_close.addEventListener('click', ()=>{
    task_dialog.close();
})

task_form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const project = document.querySelector('#project').value;
    const priority = document.querySelector('input[name="priority_radio"]:checked').value;

    const to_do = new Todo(title, description, date, project, priority);
    todos.push(to_do);
    task_dialog.close();
})
console.log(todos);

