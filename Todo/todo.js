'use strict';
const tasks = [];
const taskList = document.getElementsByName('task');
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
    sts.innerHTML = tasks[index].status;
    sts.addEventListener('click',() => {
        if(sts.innerHTML == '作業中'){
            sts.innerHTML = '完了';
            tasks[index].status = sts.innerHTML;
            judgeDisplay();
        } else{
            sts.innerHTML = '作業中';
            tasks[index].status = sts.innerHTML;
            judgeDisplay();
        }
    });
    return sts;
}



//削除ボタン生成処理
const createRemoveBtn = (index) => {
    const rmv = document.createElement('button');
    rmv.setAttribute('id', 'rmvbtn_' + index);
    rmv.innerText = '削除';
    rmv.addEventListener('click',() => {
        tasks.splice(index,1);
        TodoDisplay();
        judgeDisplay();
    });
    return rmv;
}

const TodoDisplay = () => {
    tbl.innerHTML = '';
    tasks.forEach((value,index) => {
        const tr  = document.createElement('tr');
        tr.setAttribute('id','tr_' + index);
        tr.appendChild(createTd(index));
        tr.appendChild(createTd(value.comment));
        tr.appendChild(createStatusBtn(index));
        tr.appendChild(createRemoveBtn(index));
        tbl.appendChild(tr);
    });
    document.getElementById('input').value = '';
}

const allDisplay = () => {
    tasks.forEach((value,index) => {
        document.getElementById('tr_' + index).style.display = '';
});
}

const midcompDisplay = (a) => {
    tasks.forEach((value,index) => {
        if(value.status == a){
            document.getElementById('tr_' + index).style.display = 'none';
        }});
}

const judgeDisplay = () => {
    if(taskList[0].checked){
        allDisplay();
    } else if(taskList[1].checked){
        allDisplay();
        midcompDisplay('完了');
    } else if(taskList[2].checked){
        allDisplay();
        midcompDisplay('作業中');
    }
}

document.getElementById('add').addEventListener('click',() => {
const inputTask = document.getElementById('input').value;
const task = {
    comment: inputTask,
    status: '作業中'
};
tasks.push(task);
TodoDisplay();
judgeDisplay();
console.log(taskList);
});

taskList.forEach((value) => {
    value.addEventListener('change', () => {
        judgeDisplay();
    });   
});