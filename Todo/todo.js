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
        const tr  = document.createElement('tr');

        const createTd = (contents) => {
            const td = document.createElement('td');
            td.innerHTML = contents;
            tbl.appendChild(td);
        }

        tbl.innerHTML = '';

        tasks.forEach((value,index) => {
            const tr  = document.createElement('tr');
            createTd(index);
            createTd(value.comment);
            createTd('<button>' + value.status + '</button>');
            createTd('<button id="del">' + '削除' + '</button>');
            tbl.appendChild(tr);
        });

        document.getElementById('input').value = '';

    });
}