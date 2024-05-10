const addBtn = document.querySelector('#add')
const list = document.querySelector('#list')
addBtn.addEventListener('click', inputHandler)

function inputHandler() {
    const todoInput = document.querySelector('#input')
    if (todoInput.value) {
        addListItems(todoInput.value)
        todoInput.value = ""

    } else {
        if ( todoInput.value !== String && todoInput.value == "") {
            console.log("hatali giris")
        }
    }
}


function addListItems(inputValue) {
    let input = inputValue
    let listItem = document.createElement('li')
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    listItem.innerHTML = `${input}<span id="deleteBtn" role="button" class="badge text-bg-primary rounded-pill" >X</span>
    `
    list.append(listItem)
}   

// store to local storage
// create the delete btn
// 