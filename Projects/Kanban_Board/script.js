const addTask = document.getElementById('add-task-btn')

const todoBoard = document.getElementById('todo-board')

addTask.addEventListener('click' , ()=>{
   const input = prompt('What is the Task')
   if(!input) return;
    const taskCard = document.createElement('p');
    taskCard.classList.add('item')
    taskCard.innerText=input;

    todoBoard.appendChild(taskCard)
    


})