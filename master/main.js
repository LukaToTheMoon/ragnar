// Variables for button and input text
const body = document.querySelector("body");
const addBtn = document.querySelector('#addBtn');
const inputText = document.querySelector('#input-text');

// Function that adds tasks
function addTasks(){

var isha = inputText.value.trim();

if(isha === ""){
    alert("write something!");
    return;
} else if(isha === 'lorem'){
    isha = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, cupiditate facilis voluptates perspiciatis temporibus quis saepe architecto eveniet? Quae molestiae placeat mollitia architecto accusamus exercitationem? Harum corrupti voluptate ducimus fuga.';
}

// Variables for new task
var containerDiv = document.createElement('div');
var textDiv = document.createElement('div');
var delOrDoneDiv = document.createElement('div');
var delDiv = document.createElement('div');
var doneDiv = document.createElement('div');

var textArea = document.createElement('p');
var doneIcon = document.createElement('i');
var delIcon = document.createElement('i');

// Appending Childs
 
    //adding class to variables
delIcon.classList = 'fa-solid fa-trash';
doneIcon.classList = 'fa-solid fa-check';
textArea.classList = 'added-text';

containerDiv.classList = 'container';
textDiv.classList = 'textDiv';
delOrDoneDiv.classList = 'delOrDoneDiv';
delDiv.classList = 'delDiv';
doneDiv.classList = 'doneDiv';

    // Adding titles 
delDiv.title = 'Delete';
doneIcon.title = "Cross";


    //Appending Childs
delDiv.appendChild(delIcon);
doneDiv.appendChild(doneIcon);

delOrDoneDiv.append(doneDiv, delDiv);

textDiv.append(textArea);

containerDiv.append(textDiv, delOrDoneDiv);



    textArea.innerText = isha;

    const existingContainerDiv = document.querySelector('.container');
    existingContainerDiv.insertAdjacentElement('afterend', containerDiv);

    inputText.value = "";
  }

//Function runners
addBtn.addEventListener('click', addTasks);
inputText.addEventListener('keydown', function(e){
    if (e.keyCode === 13) { 
        addTasks();
      }
});

body.addEventListener('click', deleteItem);
body.addEventListener('click', crossText);

function deleteItem(e){
    if(e.target.className === 'fa-solid fa-trash'){
        const item = e.target.parentElement;
        const removedItem = item.parentElement;
        const removedItem2 = removedItem.parentElement;
        body.removeChild(removedItem2);
    }
}
  
function crossText(e){
    if(e.target.className === 'fa-solid fa-check'){
        var textArea = e.target.parentElement.parentElement.previousElementSibling.firstChild;
        textArea.style.textDecoration = 'line-through';
        e.target.className = 'fa-solid fa-x';
    }  else if(e.target.className === 'fa-solid fa-x' ) {
        var textArea = e.target.parentElement.parentElement.previousElementSibling.firstChild;
        textArea.style.textDecoration = 'none';
        e.target.className = 'fa-solid fa-check';
    }

    if(e.target.className === 'fa-solid fa-x'){
        e.target.title = 'Undo'
    } else if(e.target.className === 'fa-solid fa-check'){
        e.target.title = 'Cross'
    }
}



