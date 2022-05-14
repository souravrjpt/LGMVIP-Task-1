let addBtn = document.getElementById("adding");
let currentInput=document.getElementById("text")
let taskListNode=document.getElementById("tasklist")
addBtn.addEventListener('click',addTask)
function addTask(){
    let taskInput=currentInput.value;

    // console.log(taskInput);
    if(check()){
        addTaskIntoTodo(taskInput);
        removeTextInput();
    }
}

function removeTextInput(){
    currentInput.value="";

}

function check(){
    if(currentInput.value==="")
    {
        alert("PLEASE ADD SOME TASK!!");
        return false;

    }
    return true;
}

function addTaskIntoTodo(taskInput){
    let task=document.createElement("div");
    let taskName=document.createElement("p");
    let taskBtn=document.createElement("button");
    taskBtn.innerHTML="DONE";
    taskBtn.style.alignContent ="left";
    
    taskName.innerHTML = taskInput;

    task.appendChild(taskName);
    task.appendChild(taskBtn);


    taskListNode.appendChild(task);
    taskBtn.addEventListener('click',onDone);
 
}
function onDone(event){
    event.target.parentNode;
   let deleteTask=document.getElementById("tasklist");
  deleteTask.addEventListener('click',dTask);
}
function dTask(event){
    event.target.parentNode.remove();
}
