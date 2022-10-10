// const taskPage = () => {
//   const content = document.querySelector("#content");
//   let index = 1;

//   class Task {
//     constructor(name, date, status) {
//       this.name = name;
//       this.date = date;
//       this.status = status;
//     }
//   }

//   let taskArray = [
//     new Task("Do dishes", "2022-10-30", false),
//     new Task("Walk a dog", "2022-10-30", false),
//     new Task("Learn Portuguese", "2022-10-30", true),
//   ];
//   //function to create div with attr&name
//   const createDiv = (attribute, name) => {
//     const div = document.createElement("div");
//     div.setAttribute(attribute, name);
//     return div;
//   };
//   const renderContentTitle = (title) => {
//     content.appendChild(createDiv("id", "content-title")).innerText = title;
//   };

//   const createTaskWrapper = () => {
//     content.appendChild(createDiv("id", "task-wrapper"));
//   };

//   const createTaskDiv = (task) => {
//     const taskWrapper = document.querySelector("#task-wrapper");
//     if (task.status == false) {
//       taskWrapper
//         .appendChild(createDiv("class", "task"))
//         .setAttribute("id", `task-${index}`);
//       renderTaskContent(index);
//     } else {
//       taskWrapper
//         .appendChild(createDiv("class", "task done"))
//         .setAttribute("id", `task-${index}`);
//       renderTaskContent(index);
//     }

//     index++;
//   };

//   const renderTaskContent = (index) => {
//     const currentDiv = document.querySelector(`#task-${index}`);
//     currentDiv.innerText = taskArray[index - 1].name;
//     currentDiv.appendChild(
//       createDiv("class", "task-btn-wrapper")
//     ).innerHTML = `<button class="task-btn status">
//     <img class="icon" src="./img/tick.svg"/>
//   </button>
//   <button class="task-btn delete">
//     <img class="icon" src="./img/delete.svg"/>
//   </button>`;
//     currentDiv.appendChild(createDiv("class", "task-date")).innerText = `Due:${
//       taskArray[index - 1].date
//     }`;
//   };
//   const renderAddBtn = () => {
//     const taskWrapper = document.querySelector("#task-wrapper");
//     taskWrapper.appendChild(createDiv("id", "add-task-btn")).innerText =
//       "+ Add new Task";
//   };

//   const renderAllTask = () => {
//     index = 1;
//     taskArray.forEach((e) => {
//       createTaskDiv(e);
//     });
//   };
//   const clearAllTask = () => {
//     const taskWrapper = document.querySelector("#task-wrapper");
//     taskWrapper.innerHTML = "";
//   };

//   const editStatus = (e) => {
//     const index =
//       e.currentTarget.parentNode.parentNode.id.replace(/\D/g, "") - 1;
//   };
//   const toggleStatus = (e) => {
//     const index =
//       e.currentTarget.parentNode.parentNode.id.replace(/\D/g, "") - 1;

//     if (taskArray[index].status == true) {
//       taskArray[index].status = false;
//     } else {
//       taskArray[index].status = true;
//     }
//     renderAll();
//   };

//   const deleteStatus = (e) => {
//     const index =
//       e.currentTarget.parentNode.parentNode.id.replace(/\D/g, "") - 1;
//     taskArray.splice(index, 1);

//     renderAll();
//   };
//   const resetForm = () => {
//     const form = document.querySelector("#form-new-task");
//     form.reset();
//   };
//   const showHideForm = () => {
//     const form = document.querySelector("#form-wrapper");
//     form.style.display = "flex";
//   };

//   const hideFormNew = () => {
//     const form = document.querySelector("#form-wrapper");
//     form.style.display = "none";
//   };

//   window.onload = () => {
//     const form = document.querySelector("#form-new-task");
//     form.onsubmit = submittedNewTask;
//   };

//   const submittedNewTask = (event) => {
//     event.preventDefault();
//     const taskName = document.querySelector("[name='name']").value;
//     const taskDate = document.querySelector("[name='date']").value;
//     taskArray.push(new Task(taskName, taskDate, false));

//     renderAll();
//     resetForm();
//     hideFormNew();
//   };

//   const bindEvents = () => {
//     const newTaskBtn = document.querySelector("#add-task-btn");
//     newTaskBtn.addEventListener("click", showHideForm);

//     const cancelBtn = document.querySelector("#form-btn-cancel");
//     cancelBtn.addEventListener("click", hideFormNew);

//     const statusTask = document.querySelectorAll(".status");
//     statusTask.forEach((e) => {
//       e.addEventListener("click", toggleStatus);
//     });

//     const deleteTask = document.querySelectorAll(".delete");
//     deleteTask.forEach((e) => {
//       e.addEventListener("click", deleteStatus);
//     });
//   };

//   const renderAll = () => {
//     createTaskWrapper();
//     clearAllTask();
//     renderAllTask();
//     renderAddBtn();
//     bindEvents();
//   };
//   renderContentTitle("Your task to do");
//   renderAll();
// };

// taskPage();

// =================================
{
  /* <div class="container">
          <p class="name">Title title</p>
          <p class="project-name">Part of project: Project name</p>
          <p class="date">Due: 2022-10-30</p>
          <p class="priority low">Low</p>

          <p class="txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div class="container-btns">
            <button id="status" class="btn">
              <img class="icon" src="./img/tick.svg" />
            </button>
            <button id="edit" class="btn">
              <img class="icon" src="./img/edit.svg" />
            </button>
            <button id="delete" class="btn">
              <img class="icon" src="./img/delete.svg" />
            </button>
          </div>
        </div>
       
        <div id="add-task-btn" class="btn">+ Add new task</div> */
}

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

let taskArray = [
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
const taskPage = () => {
  const content = document.querySelector("#content");

  let index;

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
    taskArray.forEach((e) => {
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
    newTaskBtn.addEventListener("click", showHideForm);

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
  };

  const showHideForm = () => {
    const form = document.querySelector(".form-wrapper");
    form.classList.toggle("hidden");
  };

  const changeStatus = (e) => {
    getIndex(e);
    if (taskArray[index].status == true) {
      taskArray[index].status = false;
    } else {
      taskArray[index].status = true;
    }

    renderAll();
  };

  const deleteStatus = (e) => {
    getIndex(e);
    taskArray.splice(index, 1);
    renderAll();
  };

  const getIndex = (e) => {
    index = e.currentTarget.parentNode.parentNode.id.replace(/\D/g, "") - 1;
  };
  const clearContent = () => {
    content.innerHTML = "";
  };

  window.onload = () => {
    const form = document.querySelector("#form-new-task");
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

    taskArray.push(
      new Task(
        taskName,
        projectName,
        taskDate,
        taskPriority,
        taskDescription,
        false
      )
    );
    renderAll();
    resetForm();
    showHideForm();
  };

  const resetForm = () => {
    const form = document.querySelector("#form-new-task");
    form.reset();
  };
  const renderAll = () => {
    clearContent();
    renderAllTask();
    renderAddBtn();
    bindEvents();
  };
  renderAll();
};

taskPage();
