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
    projectName.innerText = project;
    container.appendChild(projectName);

    getTaskList(project);
    const tasksOL = document.createElement("ol");
    tasksOL.classList.add("task-list");
    thisProjectTask.forEach((e) => {
      const liElement = document.createElement("li");
      liElement.innerText = e.name+ e.priority;
      tasksOL.appendChild(liElement);
    });
    container.appendChild(tasksOL);
  };

  const getTaskList = (project) => {
    thisProjectTask = allTaskArray.filter(
      (task) => task.projectName == project
    );
    
  };
  renderAllProjects();
};

export default renderProjectsPage;
