(()=>{"use strict";const e=document.querySelector(".main");function t(t){o.forEach((n=>{n.name===t&&e.appendChild(n.displayDOM())}))}function n(){for(;e.firstChild;)e.removeChild(e.lastChild)}function c(){document.querySelectorAll(".project-btn").forEach((e=>{e.textContent===r[0]?e.classList.add("selected"):e.classList.remove("selected")}))}const d=document.querySelector("#form-container"),s=document.querySelector(".form");function a(){d.style.display="none"}const o=[],r=[];class i{cardlist=[];constructor(e){this.name=e}addCard(e){this.cardlist.push(e)}removeCard(e){this.cardlist.forEach(((t,n)=>{t.title===e&&this.cardlist.splice(n,1)}))}displayDOM(){const e=document.createElement("div");e.classList="project";const t=document.createElement("h2");return t.textContent=this.name,e.appendChild(t),this.cardlist.forEach((t=>{e.appendChild(t.displayCARD())})),e}appendToNav(){const e=document.querySelector(".project-btns"),d=document.createElement("li");d.classList="js-li-project";const s=document.createElement("button");if(s.classList.add("project-btn"),s.textContent=this.name,s.addEventListener("click",(e=>{r[0]=this.name,n(),t(this.name),c()})),d.appendChild(s),"Default Project"!==this.name){const t=document.createElement("button");t.classList="remove",t.textContent="x",t.addEventListener("click",(()=>{e.removeChild(d);const t=o.findIndex((e=>e.name===this.name));o.splice(t,1),n(),m()})),d.appendChild(t)}e.appendChild(d)}}const l=document.querySelector(".main");function m(){const e=document.createElement("div");e.classList="project";const t=document.createElement("h2");t.textContent="All Projects",e.appendChild(t),o.forEach((t=>{t.cardlist.forEach((t=>{e.appendChild(t.displayCARD())}))})),n(),l.appendChild(e),r[0]="All Projects",c()}class p{constructor(e,t,n,c){this.title=e,this.description=t,this.date=n,this.priority=c}displayCARD(){const e=document.createElement("div");e.classList="card";const t=document.createElement("h3");t.textContent=this.title;const n=document.createElement("p");n.textContent=this.description;const c=document.createElement("p");c.textContent=this.date;const d=document.createElement("INPUT");d.setAttribute("type","checkbox"),d.addEventListener("change",(t=>{t.target.checked?e.classList.add("done"):e.classList.remove("done")}));const s=document.createElement("button");return s.classList.add("remove"),s.textContent="x",s.addEventListener("click",(()=>{e.classList.add("removed"),o.forEach((e=>{e.removeCard(this.title)}))})),e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(d),e.appendChild(s),e}}const h=new Date,u=h.getFullYear()+"-"+("0"+(h.getMonth()+1)).slice(-2)+"-"+("0"+h.getDate()).slice(-2),C=new p("Comida 1","Comprar comida",u,"high"),E=new p("Comida 2","Comprar más comida",u,"medium"),f=new i("Default Project");var v;o.push(f),f.appendToNav(),f.addCard(C),f.addCard(E),r[0]="All Projects",m(),c(),v=()=>{const e=window.prompt("Project name:"),d=new i(e);o.push(d),d.appendToNav(),n(),t(d.name),r[0]=d.name,c()},document.querySelector("#js-add-project").addEventListener("click",(()=>{v()})),document.querySelector("#js-btn-cards").addEventListener("click",(()=>{d.style.display="flex"})),d.addEventListener("click",(e=>{"form-container"===e.target.id&&a()})),s.addEventListener("submit",(e=>{!function(e){e.preventDefault();const t=new FormData(e.target),n=Object.fromEntries(t),c=new p(n.title,n.description,n.date,n.priority);o.forEach((e=>{e.name===r[0]&&e.addCard(c)})),"All Projects"===r[0]&&o[0].addCard(c)}(e),s.reset(),a(),n(),"All Projects"===r[0]?m():t(r[0])})),document.querySelector(".all-projects").addEventListener("click",(()=>{r[0]="All Projects",m(),c()}))})();