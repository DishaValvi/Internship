
var tableShow = () => {
    
    if (localStorage.getItem('list') == null) {
        document.getElementById('table').classList.add('noTodo')
        document.getElementById('table').innerText = "No Todos To Display"
    }
    else {
        var details = localStorage.getItem('list');
        var array = JSON.parse(details)
        let tablebody = ""
        for (let index = 0; index < array.length; index++) {
            tablebody += "<tr><td>" + (index + 1) + '</td><td>' + array[index].title + '</td><td>' + array[index].desc + '</td><td><button type="button" id="delete" onclick="deleteTodo(' + index + ')"><i class="fa fa-trash" aria-hidden="true"></i></button></td></tr>'
            document.getElementById('tbody').innerHTML = tablebody
        }
    }
}


tableShow()


var deleteTodo = (id) => {
    var array = JSON.parse(localStorage.getItem('list'))
    if (array.length == 1) {
        clearList()
    }
    else{
    alert("Are you sure want to delete Todo ??")
    array.splice(id,1)
    localStorage.setItem('list', JSON.stringify(array))
    tableShow()
}
}


var clearList = () => {
    alert("Are you sure want to clear Todo list ??")
    localStorage.clear()
    tableShow()
}