document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addTodoBtn = document.getElementById('addTodoBtn');
    const todoList = document.getElementById('todoList');
    
    // Add new todo
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;
        
        const li = document.createElement('li');
        
        // Create todo text span
        const todoSpan = document.createElement('span');
        todoSpan.textContent = todoText;
        
        // Create actions container
        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'todo-actions';
        
        // Create edit button
        const editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        
        // Append elements
        actionsDiv.appendChild(editBtn);
        actionsDiv.appendChild(deleteBtn);
        li.appendChild(todoSpan);
        li.appendChild(actionsDiv);
        todoList.appendChild(li);
        
        // Clear input
        todoInput.value = '';
        
        // Add event listeners for buttons
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
        
        editBtn.addEventListener('click', function() {
            const newText = prompt('Edit your todo:', todoSpan.textContent);
            if (newText !== null && newText.trim() !== '') {
                todoSpan.textContent = newText.trim();
            }
        });
    }
    
    // Event listeners
    addTodoBtn.addEventListener('click', addTodo);
    
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});