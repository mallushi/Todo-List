export default function addProjectDisplay(projects){
    const project_display = document.getElementById('project_display');
    project_display.innerHTML = '';
    
    projects.forEach(project=>{
        project_display.innerHTML += 
            `<div>
            <h3>${project.project_title}</h3>
            <button class="project_edit">Edit</button>
            <button class="project_delete">Delete</button>
            </div>`
    })
};