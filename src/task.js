import { data } from "./index";



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

const renderTaskPage = () => {
  const content = document.querySelector("#content");
  const formAddBtn = document.querySelector("#form-btn-add");
  const formEditBtn = document.querySelector("#form-btn-edit");
  let index;
  let editMode = false;

console.log(data);

  const renderTask = (task) => {
    const container = document.createElement("div");
    container.classList.add("container");
    if (task.status == true) {
      container.classList.add("task-done");
    }
    container.id = `task-${index}`;
    content.appendChild(container);

    renderData(container, task);

    const containerBts = document.createElement("div");
    containerBts.classList.add("container-btns");
    container.appendChild(containerBts);

    renderBtn(containerBts);
  };

  const renderAllTask = () => {
    index = 1;
    allTaskArray.forEach((e) => {
      renderTask(e);
      index++;
    });
  };
  const renderAddBtn = () => {
    const addBtn = document.createElement("div");
    addBtn.classList.add("btn");
    addBtn.id = "add-task-btn";
    addBtn.innerText = "+ Add new task";
    content.appendChild(addBtn);
  };

  const renderBtn = (containerBts) => {
    const btnStatus = document.createElement("button");
    btnStatus.classList.add("btn", "status");
    containerBts.appendChild(btnStatus);

    const statusImg = document.createElement("img");
    statusImg.classList.add("icon");
    statusImg.src = "./img/tick.svg";
    btnStatus.appendChild(statusImg);

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("btn", "edit");
    containerBts.appendChild(btnEdit);

    const editImg = document.createElement("img");
    editImg.classList.add("icon");
    editImg.src = "./img/edit.svg";
    btnEdit.appendChild(editImg);

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn", "delete");
    containerBts.appendChild(btnDelete);

    const deleteImg = document.createElement("img");
    deleteImg.classList.add("icon");
    deleteImg.src = "./img/delete.svg";
    btnDelete.appendChild(deleteImg);
  };

  const renderData = (container, task) => {
    const taskName = document.createElement("p");
    taskName.classList.add("name");
    taskName.innerText = task.name;
    container.appendChild(taskName);

    const projectName = document.createElement("p");
    projectName.classList.add("project-name");
    projectName.innerText = `Part of project: ${task.projectName}`;
    container.appendChild(projectName);

    const projectDate = document.createElement("p");
    projectDate.classList.add("date");
    projectDate.innerText = `Due: ${task.date}`;
    container.appendChild(projectDate);

    const priority = document.createElement("p");
    priority.classList.add("priority", `${task.priority}`);
    priority.innerText = task.priority;
    container.appendChild(priority);

    const txt = document.createElement("p");
    txt.classList.add("txt");
    txt.innerText = task.description;
    container.appendChild(txt);
  };

  const bindEvents = () => {
    const newTaskBtn = document.querySelector("#add-task-btn");
    newTaskBtn.addEventListener("click", newTaskForm);

    const cancelBtn = document.querySelector("#form-btn-cancel");
    cancelBtn.addEventListener("click", showHideForm);

    const statusTask = document.querySelectorAll(".status");
    statusTask.forEach((e) => {
      e.addEventListener("click", changeStatus);
    });

    const deleteTask = document.querySelectorAll(".delete");
    deleteTask.forEach((e) => {
      e.addEventListener("click", deleteStatus);
    });

    const editTask = document.querySelectorAll(".edit");
    editTask.forEach((e) => {
      e.addEventListener("click", editForm);
    });
  };

  const newTaskForm = () => {
    showHideForm();

    //check and hide correct btn
    if (formAddBtn.classList.contains("hidden")) {
      formAddBtn.classList.toggle("hidden");
      formEditBtn.classList.toggle("hidden");
    }
  };

  const showHideForm = () => {
    resetForm();
    const form = document.querySelector(".form-wrapper");
    form.classList.toggle("hidden");
  };

  const changeStatus = (e) => {
    getIndex(e);
    if (allTaskArray[index].status == true) {
      allTaskArray[index].status = false;
    } else {
      allTaskArray[index].status = true;
    }

    renderAll();
  };

  const deleteStatus = (e) => {
    getIndex(e);
    allTaskArray.splice(index, 1);
    renderAll();
  };

  const getIndex = (e) => {
    index = e.currentTarget.parentNode.parentNode.id.replace(/\D/g, "") - 1;
  };
  const clearContent = () => {
    content.innerHTML = "";
  };

  window.onload = () => {
    const form = document.querySelector("#form");
    form.onsubmit = submittedNewTask;
  };

  const submittedNewTask = (event) => {
    event.preventDefault();
    const taskName = document.querySelector("[name='name']").value;
    const projectName = document.querySelector("[name='project-name']").value;
    const taskDate = document.querySelector("[name='date']").value;
    const taskPriority = document.querySelector("[name='priority']").value;
    const taskDescription = document.querySelector(
      "[name='description']"
    ).value;
    if (!editMode) {
      allTaskArray.push(
        new Task(
          taskName,
          projectName,
          taskDate,
          taskPriority,
          taskDescription,
          false
        )
      );
    } else {
      allTaskArray[index] = new Task(
        taskName,
        projectName,
        taskDate,
        taskPriority,
        taskDescription,
        false
      );
      //switch off edit mode
      editMode = false;
    }

    renderAll();
    showHideForm();
  };

  const editForm = (e) => {
    getIndex(e);
    showHideForm();
    editMode = true;
    document.querySelector("[name='name']").value = allTaskArray[index].name;
    // document.querySelector(`${allTaskArray[index].projectName}`).setAttribute("selected", "selected");
    document
      .querySelector(`#${allTaskArray[index].priority}`)
      .setAttribute("selected", "selected");
    document.querySelector("[name='date']").value = allTaskArray[index].date;
    document.querySelector("[name='description']").value =
      allTaskArray[index].description;

    //check and hide correct btn
    if (!formAddBtn.classList.contains("hidden")) {
      formAddBtn.classList.toggle("hidden");
      formEditBtn.classList.toggle("hidden");
    }
  };

  const resetForm = () => {
    const form = document.querySelector("#form");
    form.reset();
  };
  const renderAll = () => {
    clearContent();
    getProjectsNames();
    updateProjects();
    renderAllTask();
    renderAddBtn();
    bindEvents();
  };
  renderAll();
};

export default renderTaskPage;
