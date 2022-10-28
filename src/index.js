import renderProjectsPage from "./projects";
import renderTaskPage from "./task";
import { showHideForm } from "./forms";

const content = document.querySelector("#content");
class Task {
  constructor(name, projectName, date, priority, description, status) {
    this.name = name;
    this.projectName = projectName;
    this.date = date;
    this.priority = priority;
    this.description = description;
    this.status = status;
  }
}

let allTaskArray = [
  new Task(
    "Do dishes",
    "Household duties",
    "2022-10-30",
    "low",
    "lorem ipusm lorem lorem lorem lorem",
    true
  ),
  new Task(
    "Walk a dog",
    "Household duties",
    "2022-10-30",
    "medium",
    "lorem ipusm lorem lorem lorem lorem",
    false
  ),
  new Task(
    "Learn Portuguese",
    "Learning",
    "2022-10-30",
    "high",
    "lorem ipusm lorem lorem lorem lorem",
    false
  ),
  new Task(
    "Learn Portuguese2",
    "Learning",
    "2022-10-30",
    "high",
    "lorem ipusm lorem lorem lorem lorem",
    false
  ),
];

let allProjectsNames;

const getProjectsNames = () => {
  allProjectsNames = allTaskArray.map((task) => task.projectName);
  capitalizeWords(allProjectsNames);
  //Always keep 'None' project name
  allProjectsNames.push("None");
  //remove duplicates
  allProjectsNames = [...new Set(allProjectsNames)];
};
const capitalizeWords = (arr) => {
  return arr.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });
};
const lowerCaseDashed = (str) => {
  return str.replace(/\s+/g, "-").toLowerCase();
};
const updateProjects = () => {
  const projectSelect = document.querySelector("#project-name");

  //clean first
  projectSelect.innerHTML = "";

  allProjectsNames.forEach((e) => {
    const option = document.createElement("option");
    option.innerText = e;
    option.id = lowerCaseDashed(e);
    option.value = e;
    projectSelect.appendChild(option);
  });
};
const clearContent = () => {
  content.innerHTML = "";
};

const bindBtns = () => {
  const projectsBtn = document.querySelector("#btn-projects");
  projectsBtn.addEventListener("click", renderProjectsPage);

  const taskBtn = document.querySelector("#btn-task");
  taskBtn.addEventListener("click", renderTaskPage);

  const cancelBtn = document.querySelector("#form-btn-cancel");
  cancelBtn.addEventListener("click", showHideForm);
};

bindBtns();
renderTaskPage();

export {
  Task,
  content,
  allTaskArray,
  allProjectsNames,
  getProjectsNames,
  lowerCaseDashed,
  updateProjects,
  clearContent,
  showHideForm,
};
