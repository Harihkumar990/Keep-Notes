import { rendernotes } from "./app.js";

let array = JSON.parse(localStorage.getItem("notes"))||[];

let archivecontainer = document.querySelector(".archived-container") ;
archivecontainer.addEventListener("click" , (e) => {
    
    let notekey = e.target.dataset.key;
    let notetype = e.target.dataset.type;
    switch (notetype){
        case "delete":
            array = array.filter(({id}) => id.toString() !== notekey );
            archivecontainer.innerHTML = rendernotes(array.filter(({isArchived}) => isArchived))
            localStorage.setItem("notes",JSON.stringify(array));
        case "archive":
            array = array.map((note) => note.id.toString() === notekey ? {...note,isArchived:!note.isArchived}:note);
            archivecontainer.innerHTML = rendernotes(array.filter(({isArchived})=> isArchived));
            localStorage.setItem("notes", JSON.stringify(array))
        
    }
})
archivecontainer.innerHTML = rendernotes(array.filter(({isArchived}) => isArchived))