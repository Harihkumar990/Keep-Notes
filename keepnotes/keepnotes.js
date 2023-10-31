import { rendernotes } from "./app.js";
let button = document.querySelector(".add-btn");
let Title = document.querySelector(".title")
let Notes = document.querySelector(".notes")
let notescontainer= document.querySelector(".notes-container") 
let pintitle = document.querySelector(".pin-title");
let othertitle = document.querySelector(".other-title");
let l=JSON.parse(localStorage.getItem("notes"))||[];
button.addEventListener("click",(e)=>{
    if(Title.value.trim().length>0 && Notes.value.trim().length>0){
        
        l = [...l,{id:Date.now(),title:Title.value.trim(),note:Notes.value.trim(),isPinned:false,isArchived:false}];
        Title.value=Notes.value=""
        notescontainer.innerHTML=rendernotes(l.filter(({isPinned,isArchived})=> !isArchived && !isPinned));
        localStorage.setItem("notes",JSON.stringify(l));
    }
    
    
    
})
let pindisplay = document.querySelector(".pin-display");
if(l.length>0){
    pintitle.classList.toggle("d-none");
    othertitle.classList.toggle("d-none");
}
let Pinnesandother = document.querySelector(".display");
Pinnesandother.addEventListener("click",(e)=>{
    let notekey = e.target.dataset.key;
    let notetype = e.target.dataset.type;
    switch (notetype){
        case "delete":
            l = l.filter(({id}) => id.toString() !== notekey );
            notescontainer.innerHTML = rendernotes(l.filter(({isPinned, isArchived})=> !isPinned && !isArchived))
            pindisplay.innerHTML = rendernotes(l.filter(({isPinned,isArchived})=> isPinned && !isArchived));
            localStorage.setItem("notes",JSON.stringify(l))
            break;
        case "pinned":
           l = l.map((note)=> note.id.toString() === notekey ? {...note , isPinned:!note.isPinned}:note );
           pindisplay.innerHTML=rendernotes(l.filter(({isPinned, isArchived}) => isPinned && !isArchived))
           notescontainer.innerHTML = rendernotes(l.filter(({isPinned, isArchived})=> !isPinned && !isArchived))
           localStorage.setItem("notes",JSON.stringify(l))
           break;
        case "archive":
            l = l.map((note) => note.id.toString()===notekey ? {...note, isArchived: !note.isArchived}:note );
            notescontainer.innerHTML = rendernotes(l.filter(({isArchived, isPinned})=> !isArchived && !isPinned));
            console.log(l);
            localStorage.setItem("notes",JSON.stringify(l));
            break;
        }       
    
})  

notescontainer.innerHTML= rendernotes(l.filter(({isPinned, isArchived}) => !isPinned && !isArchived));
pindisplay.innerHTML= rendernotes(l.filter(({isPinned, isArchived})=> isPinned && !isArchived));