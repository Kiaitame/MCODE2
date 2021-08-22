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


        const createTd = contents => {
            const td = document.createElement('td');
            td.innerHTML = contents;
            tr.appendChild(td);
        }
                
        
        console.log(tasks);

        tasks.forEach((element) => {
            createTd(tasks.indexOf(element));
            createTd(element.comment);
            createTd('<button>' + element.status + '</button>');
            createTd('<button id="del">' + '削除' + '</button>');
        })
        tbl.appendChild(tr);

        document.getElementById('input').value = '';
        
    });

}