const todoInput = document.querySelector('#task')
const buttonDOM = document.querySelector('#liveToastBtn')
const toDoList = document.querySelector('#list')
const alertDiv = document.querySelector('#alertDiv')

eventListeners(); // Tüm eventleri çalıştırır.

function eventListeners(){ // Event Listenerları atar.

    buttonDOM.addEventListener('click',addTodo)
    document.addEventListener('DOMContentLoaded',loadAllTodosToUI); // sayfa yüklendiğinde todo ları local storage dan alır.
    toDoList.addEventListener('click',deleteTodo) // ul üzerine tıklama eventi atandı.

}


function deleteTodoFromStorage(deleteTodo){
    let todos = getTodosFromStorage(); // local storage dan todo ları aldık.

    todos.forEach(function(todo,index){
        if(todo === deleteTodo){
            todos.splice(index,1); // indeks eşleştirerek todo siler.
        }
    })
    localStorage.setItem('todos',JSON.stringify(todos))


}

function deleteTodo(e){ // arayüzden todo siler
    if(e.target.className==='fa fa-remove'){ // ul üzerinde tıklanan yerin clası bu ise.

        e.target.parentElement.parentElement.remove() // list item'a parentchild ile ulaşıyoruz.

        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent)// storage dan içeriği siliyoruz.
        showAlert('warning','başarılı bir şekilde silindi :)')
    }
    else if(e.target.className==='list-group'){
        console.log('yakaladım')
        e.target.parentElement.innerHTML='asfsafs'
    }

    console.log(e.target)
    
}

function loadAllTodosToUI(){ // sayfa yüklendiğinde çalışan fonksiyon  storage daki todo ları yükler.

    let todos =  getTodosFromStorage(); // storage daki todo ları alan fonksiyon.
    todos.forEach( todo => { // herbir todo yu arayüze ekler fonksiyon ile.
        addTodoToUI(todo)
    });

}

function addTodo(e){ // arayüze todo ekler.
    const newTodo = todoInput.value.trim() // Trim ile inputun başında ve sonunda boşluk varsa silinir.

    if(newTodo ==""){
        showAlert("danger","Lütfen giriş yapınız !!")
    }
    else{
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success",'Başarılı bir şekilde eklendi :)')
    }

    e.preventDefault(); // fonksiyon çalıştığında sayfanın yenilenmesini engeller.
}

function addTodoToUI(newTodo){ // String değeri list item olarak arayüze ekler.
    // List item oluştu.
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center'
    
    
    // Liste içerisindeki link oluştu.
    const link = document.createElement('a'); 
    link.href = '#';
    link.className = 'delete-item';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    listItem.appendChild(document.createTextNode(newTodo)) // input alanı eklendi.
    listItem.appendChild(link)

    // ul içerisine li ekleme
    toDoList.appendChild(listItem)
    todoInput.value = ""; // ekleme yapıldıktan sonra input içerisini siler.

}

function getTodosFromStorage(){ // storage de array varsa alır yoksa oluşturur.

    let todos;

    if(localStorage.getItem('todos')===null){ // Storage da todos keyi yoksa null bir obje döner.
        todos=[]
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos')); // todos değeri varsa stringi array olarak almalıyız.
    }
    return todos;
}

function addTodoToStorage(newTodo){ // storage'a todo yu ekler.
    let todos = getTodosFromStorage(); // Todo yu aldık.
    todos.push(newTodo) // yeni eklenen todo storage' a ekler.

    localStorage.setItem('todos',JSON.stringify(todos))
}


function showAlert(type,massage){ //bootstrap ile arayüzde mesaj gösterir.

    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`
    alert.textContent = massage;
    alertDiv.append(alert)

    setTimeout(function(){ // gelen uyarıyı 1,5 saniye sonra siler
        alert.remove()
    },1500)

}