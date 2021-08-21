'use strict'
{
    const tasks = [];
    document.getElementById('add').addEventListener('click',() => {
        const inputTask = document.getElementById('input').value;

        const task = {
                comment: inputTask,
                status: '作業中'
            };

        tasks.push(task);
        
        const tbl = document.getElementById('tbl');
        const tr = document.createElement('tr');

        function createTd(contents){
            const td = document.createElement('td');
            td.innerHTML = contents;
            tbl.appendChild(td);    
        }
        
        tbl.appendChild(tr);
        createTd(tasks.length-1);
        createTd(inputTask);
        createTd('<button>' + task.status + '</button>');
        createTd('<button>' + '削除' + '</button>');

        document.getElementById('input').value = '';

    });

}