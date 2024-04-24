var listEle = ['Learn ReactJs', 'Create Projects'];

const taskBtn = document.getElementById('btn');
const eleList = document.querySelector('#todolist');
const tasksCont = document.querySelector('.footer');
const noOfTasks = document.createElement('label');

listEle.forEach((ele, index) => element(ele, index));

function element(ele, key){
    const list = document.createElement('li');
    list.textContent = ele;
    const buttn = document.createElement('button');
    buttn.innerHTML = `<i class="fa-solid fa-circle-xmark fa-xl"></i>`
    buttn.accessKey = key;
    buttn.classList.add('btn');
    buttn.addEventListener('click', ()=> removeEle(list) );
    list.appendChild(buttn);
    eleList.appendChild(list);
};

function renderList(){
    const val = document.getElementById('input');
    if(val.value === '')
        alert('Please! Enter the task');
    else{
        listEle.push(val.value);
        element(val.value);
        val.value='';
        updateTasksC();
    }
};

taskBtn.addEventListener('click', renderList);

function removeEle(ele){
    listEle = listEle.filter(val => val != ele.textContent);
    console.log(listEle);
    ele.remove();
    updateTasksC();
}

function updateTasksC(){
    noOfTasks.textContent = `${listEle.length} tasks left.`;
    
};
updateTasksC();
tasksCont.insertBefore(noOfTasks, tasksCont.firstChild);