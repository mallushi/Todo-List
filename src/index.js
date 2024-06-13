import './style.css';
import addProjectDisplay from './project_display';
import addTaskDisplay from './task_display';
const task_dialog = document.getElementById('task_dialog');
const project_dialog = document.getElementById('project_dialog');
const add_task = document.getElementById('add_task');
const add_project = document.getElementById('add_project');
const project_close = document.getElementById('project_close');
const task_close = document.getElementById('task_close');
const task_form = document.getElementById('task_form');
const project_form = document.getElementById('project_form');

let todos = JSON.parse(localStorage.getItem("taskdata")) || [];
let projects = JSON.parse(localStorage.getItem("projectdata")) || [];
class Project {
    constructor(project_title){
        this.project_title = project_title;
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    addProjectDisplay(projects);
    addTaskDisplay(todos);
    updateProjectSelect();
})

const resetTaskForm = ()=>{
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
    document.getElementById('date').value = "";
    document.querySelector('#project').value = "";
    document.querySelector('input[name="priority_radio"]:checked').value = "";
    task_dialog.close();
}

const resetProjectForm = ()=>{
    document.getElementById('project_title').value = "";
    project_dialog.close();
}

add_project.addEventListener('click', ()=>{
    project_dialog.show();
})

project_close.addEventListener('click', ()=>{
    project_dialog.close();
    resetProjectForm();
})

project_form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const project_title = document.getElementById('project_title').value;
    const project_object = new Project(project_title);
    projects.push(project_object);
    localStorage.setItem("projectdata", JSON.stringify(projects));
    addProjectDisplay(projects);
    updateProjectSelect();
    resetProjectForm();
    //console.log(projects);
})

function updateProjectSelect(){
    const project_options = document.getElementById('project');

    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project.project_title;
        option.textContent = project.project_title;
        //console.log(option);
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
    resetTaskForm();
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
    localStorage.setItem("taskdata", JSON.stringify(todos));
    addTaskDisplay(todos);
    resetTaskForm();
})
console.log(todos);
