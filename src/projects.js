import { clearContent, allProjectsNames, content, allTaskArray } from "./index";

const renderProjectsPage = () => {
  clearContent();
  let index;
  let thisProjectTask;

  const renderProject = (project) => {
    const container = document.createElement("div");
    container.classList.add("container");
    container.id = `project-${index}`;

    content.appendChild(container);
    renderData(project, container);
  };
  const renderAllProjects = () => {
    index = 1;
    allProjectsNames.forEach((e) => {
      renderProject(e);
      index++;
    });
  };
  const renderData = (project, container) => {
    const projectName = document.createElement("p");
    projectName.classList.add("name");
    projectName.innerText = `Project: '${project}'
    List:`;
    container.appendChild(projectName);

    getTaskList(project);

    const tasksOL = document.createElement("ol");
    tasksOL.classList.add("task-list");
    thisProjectTask.forEach((e) => {
      const liElement = document.createElement("li");
      if (e.status == true) {
        liElement.classList.add("task-done");
      }

      const taskName = document.createElement("p");
      taskName.classList.add("project-name");
      taskName.innerText = e.name;
      liElement.appendChild(taskName);

      const projectDate = document.createElement("p");
      projectDate.classList.add("date");
      projectDate.innerText = e.date;
      liElement.appendChild(projectDate);
      const priority = document.createElement("p");
      priority.classList.add("priority", `${e.priority}`);
      priority.innerText = e.priority;
      liElement.appendChild(priority);

      tasksOL.appendChild(liElement);
    });
    container.appendChild(tasksOL);
  };

  const getTaskList = (project) => {
    thisProjectTask = allTaskArray.filter(
      (task) => task.projectName == project
    );
  };
  const renderAddBtn = () => {
    const addBtn = document.createElement("div");
    addBtn.classList.add("btn");
    addBtn.id = "add-task-btn";
    addBtn.innerText = "+ Add new project";
    content.appendChild(addBtn);
  };
  const bindEvents = () => {
    const newProjectBtn = document.querySelector("#add-task-btn");
    newProjectBtn.addEventListener("click", newProjectForm);
  };

  const checkListEmpty = () => {
    let taskList = document.querySelectorAll(".task-list");
    taskList.forEach((e) => {
      if (e.innerHTML == "") {
        e.parentNode.remove();
      }
    });
  };

  const newProjectForm = () => {
    
  };
  renderAllProjects();
  renderAddBtn();
  bindEvents();
  checkListEmpty();
};

export default renderProjectsPage;
