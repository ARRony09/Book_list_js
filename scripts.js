//Get element from UI
let form=document.querySelector('#book-form');
let list=document.querySelector('#book-list');

//Book Class
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;

    }
}

//UI Class
class UI{
    
    static addToBookList(book){
        //console.log(book);
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='delete'>X</a></td>`
        console.log(row);
        list.appendChild(row)
        clearInput()
    }
    static clearInput(){
        document.querySelector('#title').value="";
        document.querySelector('#author').value="";
        document.querySelector('#isbn').value="";
    }
    static showAlert(message,className){
        let div=document.createElement('div');
        div.className=`alert ${className}`;
        div.appendChild(document.createTextNode(message));
        let container=document.querySelector('.container');
        let form=document.querySelector('#book-form');
        container.insertBefore(div,form);

        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 3000);
    }
    static deleteFromBook(target){
        if(target.hasAttribute('href')){
            target.parentElement.parentElement.remove();
            UI.showAlert('Remove book','success');
        }
    }
        
}

// addEventListener

form.addEventListener('submit',newBook);
list.addEventListener('click',removeBook)

// Define Function 

function newBook(e){
    let title=document.querySelector('#title').value;
    let author=document.querySelector('#author').value;
    let isbn=document.querySelector('#isbn').value;

    //let ui=new UI();

    if (title==="" || author===""|| isbn===""){
        UI.showAlert('Fill all the form','error')
    }else{
        let book = new Book(title,author,isbn);
    
        UI.addToBookList(book);
        UI.clearInput();
        UI.showAlert('Book Added','success');
    }
    
    //console.log(book);
    e.preventDefault();
}

function removeBook(e){
    //let ui=new UI();
    UI.deleteFromBook(e.target);
    
    e.preventDefault()
}
function clearInput(){

}

