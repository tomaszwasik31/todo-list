(()=>{class e{constructor(e,t,n,d,c,s){this.name=e,this.projectName=t,this.date=n,this.priority=d,this.description=c,this.status=s}}let t=[new e("Do dishes","household duties","2022-10-30","low","lorem ipusm lorem lorem lorem lorem",!0),new e("Walk a dog","household duties","2022-10-30","medium","lorem ipusm lorem lorem lorem lorem",!1),new e("Learn Portuguese","Learning","2022-10-30","high","lorem ipusm lorem lorem lorem lorem",!1)];(()=>{const n=document.querySelector("#content"),d=document.querySelector("#form-btn-add"),c=document.querySelector("#form-btn-edit");let s;const o=e=>{const t=document.createElement("button");t.classList.add("btn","status"),e.appendChild(t);const n=document.createElement("img");n.classList.add("icon"),n.src="./img/tick.svg",t.appendChild(n);const d=document.createElement("button");d.classList.add("btn","edit"),e.appendChild(d);const c=document.createElement("img");c.classList.add("icon"),c.src="./img/edit.svg",d.appendChild(c);const s=document.createElement("button");s.classList.add("btn","delete"),e.appendChild(s);const o=document.createElement("img");o.classList.add("icon"),o.src="./img/delete.svg",s.appendChild(o)},a=(e,t)=>{const n=document.createElement("p");n.classList.add("name"),n.innerText=t.name,e.appendChild(n);const d=document.createElement("p");d.classList.add("project-name"),d.innerText=`Part of project: ${t.projectName}`,e.appendChild(d);const c=document.createElement("p");c.classList.add("date"),c.innerText=`Due: ${t.date}`,e.appendChild(c);const s=document.createElement("p");s.classList.add("priority",`${t.priority}`),s.innerText=t.priority,e.appendChild(s);const o=document.createElement("p");o.classList.add("txt"),o.innerText=t.description,e.appendChild(o)},r=()=>{l(),d.classList.contains("hidden")&&(d.classList.toggle("hidden"),c.classList.toggle("hidden"))},l=()=>{L(),document.querySelector(".form-wrapper").classList.toggle("hidden")},i=e=>{u(e),1==t[s].status?t[s].status=!1:t[s].status=!0,y()},m=e=>{u(e),t.splice(s,1),y()},u=e=>{s=e.currentTarget.parentNode.parentNode.id.replace(/\D/g,"")-1};window.onload=()=>{document.querySelector("#form").onsubmit=p};const p=n=>{n.preventDefault();const d=document.querySelector("[name='name']").value,c=document.querySelector("[name='project-name']").value,s=document.querySelector("[name='date']").value,o=document.querySelector("[name='priority']").value,a=document.querySelector("[name='description']").value;t.push(new e(d,c,s,o,a,!1)),y(),l()},h=e=>{u(e),l(),document.querySelector("[name='name']").value=t[s].name,document.querySelector(`#${t[s].priority}`).setAttribute("selected","selected"),document.querySelector("[name='date']").value=t[s].date,document.querySelector("[name='description']").value=t[s].description,d.classList.contains("hidden")||(d.classList.toggle("hidden"),c.classList.toggle("hidden"))},L=()=>{document.querySelector("#form").reset()},y=()=>{n.innerHTML="",s=1,t.forEach((e=>{(e=>{const t=document.createElement("div");t.classList.add("container"),1==e.status&&t.classList.add("task-done"),t.id=`task-${s}`,n.appendChild(t),a(t,e);const d=document.createElement("div");d.classList.add("container-btns"),t.appendChild(d),o(d)})(e),s++})),(()=>{const e=document.createElement("div");e.classList.add("btn"),e.id="add-task-btn",e.innerText="+ Add new task",n.appendChild(e)})(),document.querySelector("#add-task-btn").addEventListener("click",r),document.querySelector("#form-btn-cancel").addEventListener("click",l),document.querySelectorAll(".status").forEach((e=>{e.addEventListener("click",i)})),document.querySelectorAll(".delete").forEach((e=>{e.addEventListener("click",m)})),document.querySelectorAll(".edit").forEach((e=>{e.addEventListener("click",h)}))};y()})()})();