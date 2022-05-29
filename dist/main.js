(()=>{"use strict";const e=document.querySelector(".main");function t(t){a.forEach((n=>{n.name===t&&e.appendChild(n.displayDOM())}))}function n(){for(;e.firstChild;)e.removeChild(e.lastChild)}function c(){document.querySelectorAll(".project-btn").forEach((e=>{e.textContent===r[0]?e.classList.add("selected"):e.classList.remove("selected")}))}const s=document.querySelector("#form-container"),d=document.querySelector(".form");function o(){s.style.display="none"}const a=[],r=[];class i{cardlist=[];constructor(e){this.name=e}addCard(e){this.cardlist.push(e)}removeCard(e){this.cardlist.forEach(((t,n)=>{t.title===e&&this.cardlist.splice(n,1)}))}displayDOM(){const e=document.createElement("div");e.classList="project";const t=document.createElement("h2");return t.textContent=this.name,e.appendChild(t),this.cardlist.forEach((t=>{e.appendChild(t.displayCARD())})),e}appendToNav(){const e=document.querySelector(".project-btns"),s=document.createElement("li");s.classList="js-li-project";const d=document.createElement("button");if(d.classList.add("project-btn"),d.textContent=this.name,d.addEventListener("click",(e=>{r[0]=this.name,n(),t(this.name),c()})),s.appendChild(d),"Default Project"!==this.name){const t=document.createElement("button");t.classList="remove",t.textContent="x",t.addEventListener("click",(()=>{e.removeChild(s);const t=a.findIndex((e=>e.name===this.name));a.splice(t,1),n(),m()})),s.appendChild(t)}e.appendChild(s)}sortByDate(){this.cardlist.sort((function(e,t){return new Date(e.date)-new Date(t.date)}))}}const l=document.querySelector(".main");function m(){const e=document.createElement("div");e.classList="project";const t=document.createElement("h2");t.textContent="All Projects",e.appendChild(t),a.forEach((t=>{t.sortByDate(),t.cardlist.forEach((t=>{e.appendChild(t.displayCARD())}))})),n(),l.appendChild(e),r[0]="All Projects",c()}class p{constructor(e,t,n,c){this.title=e,this.description=t,this.date=n,this.priority=c,this.done=!1}displayCARD(){const e=document.createElement("div");e.classList="card";const t=document.createElement("h3");t.textContent=this.title;const n=document.createElement("p");n.textContent=this.description;const c=document.createElement("p");c.textContent=this.date;const s=document.createElement("INPUT");s.setAttribute("type","checkbox"),this.done&&(s.setAttribute("checked","true"),e.classList.add("done")),s.addEventListener("change",(t=>{t.target.checked?(e.classList.add("done"),this.done=!0):(e.classList.remove("done"),this.done=!1)}));const d=document.createElement("button");return d.classList.add("remove"),d.textContent="x",d.addEventListener("click",(()=>{e.classList.add("removed"),a.forEach((e=>{e.removeCard(this.title)}))})),e.appendChild(t),e.appendChild(n),e.appendChild(c),e.appendChild(s),e.appendChild(d),e}}const u=new Date,h=u.getFullYear()+"-"+("0"+(u.getMonth()+1)).slice(-2)+"-"+("0"+u.getDate()).slice(-2),C=new p("Comida 1","Comprar comida",h,"high"),E=new p("Comida 2","Comprar más comida",h,"medium"),f=new i("Default Project");a.push(f),f.appendToNav(),f.addCard(C),f.addCard(E),r[0]="All Projects",m(),c();const y=document.querySelector(".project-menu");var v;v=()=>{y.style.display="flex"},document.querySelector("#js-add-project").addEventListener("click",(()=>{v()})),y.addEventListener("submit",(e=>{e.preventDefault();const s=new FormData(e.target),d=Object.fromEntries(s),o=new i(d["proj-title"]);a.push(o),o.appendToNav(),n(),t(o.name),r[0]=o.name,c(),y.reset(),y.style.display="none"})),document.querySelector("#js-btn-cards").addEventListener("click",(()=>{s.style.display="flex"})),s.addEventListener("click",(e=>{"form-container"===e.target.id&&o()})),d.addEventListener("submit",(e=>{!function(e){e.preventDefault();const t=new FormData(e.target),n=Object.fromEntries(t),c=new p(n.title,n.description,n.date,n.priority);console.log(typeof n.date),a.forEach((e=>{e.name===r[0]&&(e.addCard(c),e.sortByDate())})),"All Projects"===r[0]&&(a[0].addCard(c),a[0].sortByDate())}(e),d.reset(),o(),n(),"All Projects"===r[0]?m():t(r[0])})),document.querySelector(".all-projects").addEventListener("click",(()=>{r[0]="All Projects",m(),c()}))})();