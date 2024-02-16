let list = [];

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

window.addEventListener("load", function () {
    for ( var i = 0; i < cookie.length ; i++) {
        let cookie = cookies[i].trim();

        if 
    }
}
)