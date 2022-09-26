window.addEventListener('load',e=> {
    const greetName=localStorage.getItem('name') || "";
    const name=document.getElementById('name')
    name.value=greetName
    name.addEventListener('change', ()=> {
        localStorage.setItem('name',name.value)
    })
    todos=JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(element => {
        updateToDo(element)
    });
})
function updateToDo(e,ind) {
    let todoList=document.getElementById('todoList')
    let todo=document.createElement('div')
    todo.className="todo"
    let p=document.createElement('p')
    p.textContent=e
    let button=document.createElement('button')
    button.textContent="X"
    button.addEventListener('click',()=> {
        todo.parentNode.removeChild(todo);
        todos.splice(todos.indexOf(todo.firstChild.textContent),1)
        localStorage.setItem('todos',JSON.stringify(todos))
    })
    todo.append(p,button)
    todoList.append(todo)
}
function addToDo() {
    let text=document.getElementById('textEntered');
    if(text.value==="") return
    todos.push(text.value)
    updateToDo(text.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    text.value=""
}