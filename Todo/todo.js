'use strict';
const tasks = [];
const tbl = document.getElementById('tbl');
const createTd = (contents) => {
    const td = document.createElement('td');
    td.innerHTML = contents;
    return td;
}


//ステータスボタン生成処理
const createStatusBtn = (index) => {
    const sts = document.createElement('button');
    sts.setAttribute('id','crebtn_' + index);
    sts.innerHTML = '作業中';
    return sts;
}


//削除ボタン生成処理
const createRemoveBtn = (index) => {
    const rmv = document.createElement('button');
    rmv.setAttribute('id', 'rmvbtn_' + index);
    rmv.innerHTML = '削除';
    rmv.addEventListener('click',() => {
        tasks.splice(index,1);
        TodoDispay();
    });
    return rmv;
}


const TodoDispay = () => {
    tbl.innerHTML = '';
    tasks.forEach((value,index) => {
        const tr  = document.createElement('tr');
        tr.appendChild(createTd(index));
        tr.appendChild(createTd(value.comment));
        tr.appendChild(createStatusBtn(index));
        tr.appendChild(createRemoveBtn(index));
        tbl.appendChild(tr);
    });
    document.getElementById('input').value = '';
}


document.getElementById('add').addEventListener('click',() => {
const inputTask = document.getElementById('input').value;
const task = {
        comment: inputTask,
        status: '作業中'
        };
tasks.push(task);
TodoDispay();
});

