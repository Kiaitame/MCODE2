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
    sts.addEventListener('click',() => {
        if(sts.innerHTML == '作業中'){
            sts.innerHTML = '完了';
            tasks[index].status = sts.innerHTML;
        }else{
            sts.innerHTML = '作業中';
            tasks[index].status = sts.innerHTML;
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
        TodoDispay();
    });
    return rmv;
}


const TodoDispay = () => {
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


document.getElementById('add').addEventListener('click',() => {
const inputTask = document.getElementById('input').value;
const task = {
        comment: inputTask,
        status: '作業中'
        };
tasks.push(task);
TodoDispay();
});

document.getElementById('mid').addEventListener('change',() => {
allDisplay();
tasks.forEach((value,index) => {
    if(value.status == '完了'){
        document.getElementById('tr_' + index).style.display = 'none';
    }
});
})

document.getElementById('all').addEventListener('change',() => {
allDisplay();
});


document.getElementById('comp').addEventListener('change',() => {
allDisplay();
tasks.forEach((value,index) => {
    if(value.status == '作業中'){
        document.getElementById('tr_' + index).style.display = 'none';
    }
});
})
        