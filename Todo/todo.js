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
        
        console.log(tasks);
        const tbl = document.getElementById('tbl');
        const tr = document.createElement('tr');
        // const status = document.createElement('button');
        // const del = document.createElement('button');
        // status.id = 'status';
        // status.innerText = '作業中';
        // del.id = 'delete';
        // del.innerText = '削除';

        function createTd(contents){
            var td = document.createElement('td');
            td.innerHTML = contents;
            tbl.appendChild(td);    
        }
        tbl.appendChild(tr);
        createTd(tasks.length-1);
        createTd(inputTask);
        createTd('<button>' + '作業中' + '</button>');
        createTd('<button>' + '削除' + '</button>');
        // tbl.appendChild(status);
        // tbl.appendChild(del);

    });


}