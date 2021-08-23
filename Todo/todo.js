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
        
        tbl.innerHTML = '';
        
        tasks.forEach((value,index) => {
            const tr  = document.createElement('tr');
            const td1 = document.createElement('td');
            td1.innerHTML = index;
            const td2 = document.createElement('td');
            td2.innerHTML = value.comment;
            const td3 = document.createElement('td');
            td3.innerHTML = '<button>' + value.status + '</button>';
            const td4 = document.createElement('td');
            td4.innerHTML = '<button id="del">' + '削除' + '</button>';
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbl.appendChild(tr);
        });

        document.getElementById('input').value = '';
        
    });

}