export default function addProjectDisplay(projects, isEditingProject, currentEditingProjectIndex){
    const project_display = document.getElementById('project_display');
    project_display.innerHTML = '';
    
    projects.forEach((project, index)=>{
        project_display.innerHTML += 
            `<div>
            <h3>${project.project_title}</h3>
            <button class="project_edit" data-index="${index}">Edit</button>
            <button class="project_delete" data-index="${index}">Delete</button>
            </div>`
    })

    const projectDelete = document.querySelectorAll('.project_delete');
    projectDelete.forEach((button)=> {
        button.addEventListener('click', (e)=>{
            const index = e.target.getAttribute('data-index');
            projects.splice(index, 1)
            localStorage.setItem("projectdata", JSON.stringify(projects))
            addProjectDisplay(projects);
        })
    })

    const projectEdit = document.querySelectorAll('.project_edit');
    projectEdit.forEach((edit)=>{
        edit.addEventListener('click', (e)=>{
            const index = e.target.getAttribute('data-index');
            const currentProject = projects[index];
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
            })
        })
    })
};