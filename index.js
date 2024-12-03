const toDoItems = document.querySelector(".todoItems")
const svg = document.querySelector(".addToDo")
const input = document.querySelector("input")
input.addEventListener("keydown",(e)=>{
    if (e.key==="Enter") {
    
    addToDO()
    
   }
})
svg.addEventListener("click" , addToDO)
function addToDO(){
    if(input.value===""){
        alert("your input is empty")
        return;
    }
    const toDoItemCheckBox = document.createElement("input")
    toDoItemCheckBox.setAttribute("type","checkbox")
    const toDoIteCheckBox = document.createElement("p")
    toDoIteCheckBox.textContent=input.value
    const deleteToDo = document.createElement("img")
    const toDoItem  = document.createElement("li")
    deleteToDo.src="images/trash-delete-2(24x24)@3x.png"
    deleteToDo.setAttribute("onclick", "this.parentElement.style.display= 'none';")
    deleteToDo.addEventListener("click",(e)=>{
        
    //   let imageParentElement = this.parentElement
    //     console.log(imageParentElement);
        
    //     toDoItems.removeChild(imageParentElement)
    })
    
    toDoItem.appendChild(deleteToDo)
    toDoItem.appendChild(toDoIteCheckBox)
    toDoItem.appendChild(toDoItemCheckBox)     
    toDoItems.appendChild(toDoItem)
    // console.log(toDoItems);
    
    // console.log((localStorage.getItem("items")));
    
    
//   localStorage.setItem("items",input.value)

}




























