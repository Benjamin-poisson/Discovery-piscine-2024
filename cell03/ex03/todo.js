function addTask (task_name) {
    var new_task = document.createElement('div');
    new_task.textContent = task_name;
    new_task.id = task_name;
    new_task.className = 'todo';
    new_task.onclick = function() { removeTask(task_name)};
    document.getElementById('ft_list').prepend(new_task);
    list.push(task_name);
    saveCookie();
}

function removeTask (task_name) {
    if (window.confirm("Are you sure to delete this task ?")) {
        document.getElementById(task_name).remove();
        list.splice(list.indexOf(task_name),1);
        saveCookie();
    }

}

function enterName () {
    var task_name = window.prompt("Enter task name",'name');
    if (task_name == "" ) {
        console.log('No task name');
    } else {
        addTask(task_name);
    }

}

window.addEventListener("load", function() {
    let todoCookie = getCookie("TODO");

    if (todoCookie){
        let decodedTodoList = decodeURIComponent(todoCookie);
        let JSONTodoList;

        try {
            JSONTodoList = JSON.parse(decodedTodoList);
            JSONTodoList.forEach(addTodo);
        }
        catch(e) {
            console.error("Cookie decode error", e);
        }
    }
})

function getCookie(name) {
    let cookies = document.cookie.split(";");
    for ( var i = 0; i < cookie.length ; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(name + '='))
            return cookie.substring(name.length + 1);
    }
    return null;

}

window.addEventListener("beforeunload", function() {
    let todoDivs = document.getElementsByClassName("todo_div");
    let JSONString;
    let encodedTodoList;

    Array.from(todoDivs).forEach(function(todoDiv) {
        encodedTodoList.unshift(todoDiv/textContent);
    })
})
