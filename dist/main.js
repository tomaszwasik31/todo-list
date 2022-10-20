(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{iQ:()=>n,wN:()=>d,FZ:()=>a,kQ:()=>t,y6:()=>c,id:()=>r});const t=document.querySelector("#content");class n{constructor(e,t,n,o,d,c){this.name=e,this.projectName=t,this.date=n,this.priority=o,this.description=d,this.status=c}}let o,d=[new n("Do dishes","household duties","2022-10-30","low","lorem ipusm lorem lorem lorem lorem",!0),new n("Walk a dog","household duties","2022-10-30","medium","lorem ipusm lorem lorem lorem lorem",!1),new n("Learn Portuguese","Learning","2022-10-30","high","lorem ipusm lorem lorem lorem lorem",!1)];const c=()=>{o=d.map((e=>e.projectName)),o=[...new Set(o)]},s=e=>e.replace(/\s+/g,"-").toLowerCase(),r=()=>{const e=document.querySelector("#project-name");e.innerHTML="";const t=document.createElement("option");t.innerHTML="None",t.id="None",t.value="None",e.appendChild(t),o.forEach((t=>{const n=document.createElement("option");n.innerHTML=t,n.id=s(t),n.value=s(t),e.appendChild(n)}))},a=()=>{t.innerHTML=""};(()=>{const e=document.querySelector("#form-btn-add"),o=document.querySelector("#form-btn-edit");let s,i=!1;const l=e=>{const t=document.createElement("button");t.classList.add("btn","status"),e.appendChild(t);const n=document.createElement("img");n.classList.add("icon"),n.src="./img/tick.svg",t.appendChild(n);const o=document.createElement("button");o.classList.add("btn","edit"),e.appendChild(o);const d=document.createElement("img");d.classList.add("icon"),d.src="./img/edit.svg",o.appendChild(d);const c=document.createElement("button");c.classList.add("btn","delete"),e.appendChild(c);const s=document.createElement("img");s.classList.add("icon"),s.src="./img/delete.svg",c.appendChild(s)},m=(e,t)=>{const n=document.createElement("p");n.classList.add("name"),n.innerText=t.name,e.appendChild(n);const o=document.createElement("p");o.classList.add("project-name"),o.innerText=`Part of project: ${t.projectName}`,e.appendChild(o);const d=document.createElement("p");d.classList.add("date"),d.innerText=`Due: ${t.date}`,e.appendChild(d);const c=document.createElement("p");c.classList.add("priority",`${t.priority}`),c.innerText=t.priority,e.appendChild(c);const s=document.createElement("p");s.classList.add("txt"),s.innerText=t.description,e.appendChild(s)},u=()=>{p(),e.classList.contains("hidden")&&(e.classList.toggle("hidden"),o.classList.toggle("hidden"))},p=()=>{v(),document.querySelector(".form-wrapper").classList.toggle("hidden")},h=e=>{y(e),1==d[s].status?d[s].status=!1:d[s].status=!0,S()},L=e=>{y(e),d.splice(s,1),S()},y=e=>{s=e.currentTarget.parentNode.parentNode.id.replace(/\D/g,"")-1};window.onload=()=>{document.querySelector("#form").onsubmit=g};const g=e=>{e.preventDefault();const t=document.querySelector("[name='name']").value,o=document.querySelector("[name='project-name']").value,c=document.querySelector("[name='date']").value,r=document.querySelector("[name='priority']").value,a=document.querySelector("[name='description']").value;i?(d[s]=new n(t,o,c,r,a,!1),i=!1):d.push(new n(t,o,c,r,a,!1)),S(),p()},E=t=>{y(t),p(),i=!0,document.querySelector("[name='name']").value=d[s].name,document.querySelector(`#${d[s].priority}`).setAttribute("selected","selected"),document.querySelector("[name='date']").value=d[s].date,document.querySelector("[name='description']").value=d[s].description,e.classList.contains("hidden")||(e.classList.toggle("hidden"),o.classList.toggle("hidden"))},v=()=>{document.querySelector("#form").reset()},S=()=>{a(),c(),r(),s=1,d.forEach((e=>{(e=>{const n=document.createElement("div");n.classList.add("container"),1==e.status&&n.classList.add("task-done"),n.id=`task-${s}`,t.appendChild(n),m(n,e);const o=document.createElement("div");o.classList.add("container-btns"),n.appendChild(o),l(o)})(e),s++})),(()=>{const e=document.createElement("div");e.classList.add("btn"),e.id="add-task-btn",e.innerText="+ Add new task",t.appendChild(e)})(),document.querySelector("#add-task-btn").addEventListener("click",u),document.querySelector("#form-btn-cancel").addEventListener("click",p),document.querySelectorAll(".status").forEach((e=>{e.addEventListener("click",h)})),document.querySelectorAll(".delete").forEach((e=>{e.addEventListener("click",L)})),document.querySelectorAll(".edit").forEach((e=>{e.addEventListener("click",E)}))};S()})()})();