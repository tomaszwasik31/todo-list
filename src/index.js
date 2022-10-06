const { id } = require("date-fns/locale");

{
  /* <div id="content-title">Your task to do</div>
        <div id="task-wrapper">
          <div class="task">
            Do something

            <div class="task-btn-wrapper">
              <button class="task-btn" id="edit">
                <img class="icon" src="./img/edit.svg" alt="edit" />
              </button>
              <button class="task-btn" id="status">
                <img class="icon" src="./img/tick.svg" alt="status" />
              </button>
              <button class="task-btn" id="delete">
                <img class="icon" src="./img/delete.svg" alt="delete" />
              </button>
            </div>
            <div class="task-date">Due: 01/01/2020</div>
          </div>

          <div id="add-task-btn">+ Add new Task</div>
        </div> */
}

const taskPage = () => {
  const content = document.querySelector("#content");
  let taskIndex = 1;

  const createDiv = (attribute, name) => {
    const div = document.createElement("div");
    div.setAttribute(attribute, name);
    return div;
  };
  const renderContentTitle = (title) => {
    content.appendChild(createDiv("id", "content-title")).innerText = title;
  };

  const createTaskWrapper = () => {
    content.appendChild(createDiv("id", "task-wrapper"));
  };

  class Task {
    constructor(name, date, status) {
      this.name = name;
      this.date = date;
      this.status = status;
    }
  }
  let task1 = new Task("Do dishes", "01/01/2022", false);
  let task2 = new Task("Walk a dog", "01/01/2022", false);
  let task3 = new Task("Learn Portuguese", "02/01/2022", true);

  let taskArray = [task1, task2, task3];

  const createTaskDiv = () => {
    const taskWrapper = document.querySelector("#task-wrapper");

    taskWrapper
      .appendChild(createDiv("class", "task"))
      .setAttribute("id", `task-${taskIndex}`);
    renderTaskContent(taskIndex);
    taskIndex++;
  };

  const renderTaskContent = (index) => {
    const currentDiv = document.querySelector(`#task-${index}`);
    console.log(currentDiv);
  };
  const renderAddBtn = () => {
    const taskWrapper = document.querySelector("#task-wrapper");
    taskWrapper.appendChild(createDiv("id", "add-task-btn")).innerText =
      "+ Add new Task";
  };

  const renderAllTask = () => {
    taskIndex = 1;
    taskArray.forEach((e) => {
      createTaskDiv(e);
    });
  };

  const showForm = () => {
    const form = document.querySelector("#form-wrapper");
    form.style.display = "flex";
  };

  const hideForm = () => {
    const form = document.querySelector("#form-wrapper");
    form.style.display = "none";
  };
  const toggleStatus = (e) => {
    const currentTask = e.currentTarget.parentNode.parentNode;
    currentTask.classList.toggle("done");
  };
  const bindEvents = () => {
    const addTask = document.querySelector("#add-task-btn");
    addTask.addEventListener("click", showForm);

    const cancelBtn = document.querySelector("#form-btn-cancel");
    cancelBtn.addEventListener("click", hideForm);

    const statusTask = document.querySelectorAll(".status");
    statusTask.forEach((e) => {
      e.addEventListener("click", toggleStatus);
    });
  };

  renderContentTitle("Your task to do");
  createTaskWrapper();
  renderAllTask();
  renderAddBtn();
  bindEvents();
};

taskPage();
