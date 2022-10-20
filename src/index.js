import projectsPage from "./projects";
import renderTaskPage from "./task";

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
    "household duties",
    "2022-10-30",
    "low",
    "lorem ipusm lorem lorem lorem lorem",
    true
  ),
  new Task(
    "Walk a dog",
    "household duties",
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
];

let allProjectsNames;
const getProjectsNames = () => {
  allProjectsNames = allTaskArray.map((task) => task.projectName);
  //remove duplicates
  allProjectsNames = [...new Set(allProjectsNames)];
};
const lowerCaseDashed = (str) => {
  return str.replace(/\s+/g, "-").toLowerCase();
};
const updateProjects = () => {
  const projectSelect = document.querySelector("#project-name");

  //clean first
  projectSelect.innerHTML = "";
  // always 'none' as a projects available
  const option = document.createElement("option");
  option.innerHTML = "None";
  option.id = "None";
  option.value = "None";
  projectSelect.appendChild(option);

  allProjectsNames.forEach((e) => {
    const option = document.createElement("option");
    option.innerHTML = e;
    option.id = lowerCaseDashed(e);
    option.value = lowerCaseDashed(e);
    projectSelect.appendChild(option);
  });
};
const clearContent = () => {
  content.innerHTML = "";
};

renderTaskPage();

// bindMenuEvents();

// const bindMenuEvents = () => {
//   const projectsTab = document.querySelector("#btn-projects");
//   projectsTab.addEventListener("click", renderProjectsPage);
// };

export {
  Task,
  content,
  allTaskArray,
  allProjectsNames,
  getProjectsNames,
  lowerCaseDashed,
  updateProjects,
  clearContent,
};
