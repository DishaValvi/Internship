
if (localStorage.getItem('list') == null) {
    var Todo = []
} else {
    var json = localStorage.getItem('list')
    Todo = JSON.parse(json)
}

// console.log(localStorage);
//AddTodo To Storage
var AddTodo = () => {
    var title = document.getElementById('title').value
    var description = document.getElementById('desc').value
    if (title == null | title == '') {
        alert("Enter Title For Todo")
        event.preventDefault()
    }
    else if (description == null | description == '') {
        alert("Enter Description For Todo")
        event.preventDefault()
    }
    else {
        alert("Succsessfully Submited...")
        Todo.push({
            title: title,
            desc: description
        });
        localStorage.setItem('list', JSON.stringify(Todo))
        console.log(JSON.stringify(Todo))
    }
}



