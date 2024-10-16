const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search  input');

// generating new li
const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="text-light">${todo}</span>
            <i class="fa fa-trash text-light"></i>
        </li>
    `;
    list.innerHTML += html; 
}

// adding new row
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    console.log(todo);
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }
});

//delete todos

list.addEventListener('click', e => {
    if(e.target.classList.contains('fa-trash')){
        e.target.parentElement.remove();
    }
});

//filtring
const filterTodos = (term) => {

    Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'));

};

search.addEventListener('keyup', () => {
 const term = search.value.trim().toLowerCase();
 filterTodos(term);
});