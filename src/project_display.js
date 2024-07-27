export default function addProjectDisplay(projects, isEditingProject = false, currentEditingProjectIndex = null){
    const project_display = document.getElementById('project_display');
    project_display.innerHTML = '';
    
    projects.forEach((project)=>{
        project_display.innerHTML += 
            `<div class="project_container" data-id="${project.id}">
                <h3>${project.project_title}</h3>
                <div class="project_btns">
                    <button class="project_edit" data-id="${project.id}">Edit</button>
                    <button class="project_delete" data-id="${project.id}">Delete</button>
                <div>
            </div>`
    })
    console.log(projects)

    const projectDelete = document.querySelectorAll('.project_delete');
    projectDelete.forEach((button)=> {
        button.addEventListener('click', (e)=>{
            const index = e.target.getAttribute('data-id');
            const projectIndex = projects.findIndex(project => project.id === index);
            projects.splice(projectIndex, 1)
            localStorage.setItem("projectdata", JSON.stringify(projects))
            addProjectDisplay(projects);
        })
    })

    const projectEdit = document.querySelectorAll('.project_edit');
    projectEdit.forEach((edit)=>{
        edit.addEventListener('click', (e)=>{
            const index = e.target.getAttribute('data-id');
            const projectIndex = projects.findIndex(project => project.id === index);
            const currentProject = projects[projectIndex];
            document.getElementById('project_title').value = currentProject.project_title;
            isEditingProject = true;
            currentEditingProjectIndex = index;
            project_dialog.showModal();
            document.getElementById('project_submit').value = "Update";
            document.getElementById('project_submit').type = "button";
            document.getElementById('project_submit').addEventListener('click', ()=>{
                currentProject.project_title = document.getElementById('project_title').value;
                localStorage.setItem("projectdata", JSON.stringify(projects));
                addProjectDisplay(projects);
                project_dialog.close();
            }, {once: true});
        })
    })
};