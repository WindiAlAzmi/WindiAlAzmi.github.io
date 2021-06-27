const UNCOMPLETED_LIST_TODO_ID = "incompleteBookshelfList";
const COMPLETED_LIST_TODO_ID = "completeBookshelfList";
const TODO_ITEMID = "itemId";

const toggleNav = document.getElementById("toggleNav")
toggleNav.addEventListener("click", function(e) {
    const navbarInside = document.getElementById("nbr");
      navbarInside.classList.add("responsive");
     console.log(navbarInside);
  
});

const toggleExit = document.getElementById("exitToggle")
toggleExit.addEventListener("click", function(e) {
    const navbarInside = document.getElementById("nbr")
        navbarInside.classList.remove("responsive");
        console.log(navbarInside);
});


let search = document.getElementById("searchTitle");

search.addEventListener('input', ()=> {
    let search = document.getElementById("searchTitle").value.toLowerCase();
    console.log(search);
    let bookItem = document.getElementsByClassName("book_item");
    Array.from(bookItem).forEach((element, index)=>{
        let itemTitle = document.getElementsByClassName("title")[index].innerText.toLowerCase();
        console.log(itemTitle);
        if(itemTitle.includes(search)){
            element.style.display = 'flex'
        }else{
            element.style.display = 'none'
        }
    })
})

function makeTodo(title, author, year, isComplete){
    const textTitle = document.createElement("h3");
    textTitle.classList.add("title");
    textTitle.innerText = title;

    const textAuthor = document.createElement("p");
    textAuthor.classList.add("author");
    textAuthor.innerText = author;

    const textYear = document.createElement("p");
    textYear.classList.add("year");
    textYear.innerText = year;

    const container = document.createElement("article");
    container.classList.add("book_item");
    container.append(textTitle, textAuthor, textYear);


    if(isComplete){
        container.append(
            createUndoButton(),
            createTrashButton()
        );
    }else{
        container.append(
            createCheckButton(),
            createTrashButton()
        );
    }
    return container;
  
}
function createUndoButton(){
    const button = document.createElement("button");
    button.classList.add("undo-button");
    button.innerText = "undo";
    button.addEventListener("click", function(event){
        undoTaskFromCompleted(event.target.parentElement);
    });
    return button;
}
function createTrashButton(){
    const button = document.createElement("button");
    button.classList.add("trash-button");
    button.innerText = "trash";
    button.addEventListener("click", function(event){
        removeTaskFromCompleted(event.target.parentElement);
    } );
    return button;
}
function createCheckButton(){
    const button = document.createElement("button");
    button.classList.add("check-button");
    button.innerText = "check";
    button.addEventListener("click", function(event){
        addTaskToCompleted(event.target.parentElement);
    } );
    return button;
}

function addTodo(){
    const uncompletedTodoList = document.getElementById(UNCOMPLETED_LIST_TODO_ID);
    const textTitleInput = document.getElementById("inputTitleBook").value;
    const textAuthorInput = document.getElementById("inputAuthorBook").value;
    const textYearInput = document.getElementById("inputYearBook").value;

    const todo = makeTodo(textTitleInput, textAuthorInput, textYearInput, false);
    const todoObject = composeTodoObject(textTitleInput, textAuthorInput, textYearInput, false);
  
    todo[TODO_ITEMID] = todoObject.id;
    todos.push(todoObject);
    uncompletedTodoList.append(todo);
    updateDataToStorage();
}

function addTaskToCompleted(taskElement){
    const listCompleted = document.getElementById(COMPLETED_LIST_TODO_ID);
    const taskTitle = taskElement.querySelector(".book_item > h3").innerText;
    const taskAuthor = taskElement.querySelector(".book_item > .author").innerText;
    const taskYear = taskElement.querySelector(".book_item > .year").innerText;

    const newTodo = makeTodo(taskTitle, taskAuthor, taskYear, true);
    const todo = findTodo(taskElement[TODO_ITEMID]);
    todo.isComplete = true;
    newTodo[TODO_ITEMID] = todo.id;

    listCompleted.append(newTodo);
    taskElement.remove();
    updateDataToStorage();
}


function removeTaskFromCompleted(taskElement){
    const todoPosition = findTodoIndex(taskElement[TODO_ITEMID]);
    todos.splice(todoPosition, 1);
    taskElement.remove();
    alert("you have removed your data");
    updateDataToStorage();    
    }
function undoTaskFromCompleted(taskElement){
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_TODO_ID);
    const taskTitle = taskElement.querySelector(".book_item > h3").innerText;
    const taskAuthor = taskElement.querySelector(".book_item > .author").innerText;
    const taskYear = taskElement.querySelector(".book_item > .year").innerText;

    const newTodo = makeTodo(taskTitle, taskAuthor, taskYear, false);

   const todo = findTodo(taskElement[TODO_ITEMID]);
   todo.isComplete = false;
   newTodo[TODO_ITEMID] = todo.id;


    listUncompleted.append(newTodo);
    taskElement.remove();
    updateDataToStorage();
}

