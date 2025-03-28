const todoList = ['make a bed', 'wash dishes'];

let todoListHTML = '';

for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
}

console.log(todoListHTML);

function addTodo() {
    const inputElement = document.querySelector('.js-name-input'); // Corrected class name
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = ''; 
}
