export function rendernotes (notes){
    let newnote =notes.map(({id,title,note,isArchived,isPinned})=>{
        return `<div class="single-notes">
            <div class="del-title">
                <h4 class="obj-title" >${title} </h4>
                <button data-type="delete" class="del-btn size border-radius visibility"  data-key=${id}>
                <span data-type="delete" data-key=${id} class="material-symbols-outlined">
                    delete
                </span>
                </button>
            </div>
            <p class="obj-notes">${note}</p>
            <div class="btn-container">
            <button data-type="pinned" class="pinned border-radius size show visibility"  data-key=${id}>
                <span data-type="pinned" data-key=${id} class="material-symbols-outlined">
                    push_pin
                </span> 
            </button>
            <button  data-type="archive"   class="archived border-radius  size show visibility">
                <span data-key=${id} data-type="archive" class="material-symbols-outlined">
                    archive
                </span>
            </button>
            </div>
        </div>`
        
    });
    let newnotes = newnote.join("");
    return newnotes;
}
 