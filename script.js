const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const taskList = document.querySelector('#task-list');

btn.addEventListener('click', (e)=>{
    // console.log(inp.value);
    const str = `<div class="section-A">
                    <input class="checkbox" type="checkbox">
                    <p class="text">${inp.value}</p>
                </div>
                <div class="section-B">
                    <span class="up-arrow">⬆️</span>
                    <span class="bin">🗑️</span>
                    <span class="down-arrow">⬇️</span>
                </div>`

    const newItem = document.createElement('div');
    newItem.classList.add('task');
    newItem.innerHTML = str;
    // console.log(newItem);

    taskList.append(newItem);
    inp.value = '';
})  


taskList.addEventListener('click', (e)=>{
    console.log(e.target.getAttribute('class'));
    const tastText = e.target.getAttribute('class');

    if(tastText === 'bin'){
        e.target.parentElement.parentElement.remove();
    }

})