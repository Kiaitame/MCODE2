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
            return td;
        }

        //ステータスボタン生成処理
        const createStatusBtn = () => {
            const sts = document.createElement('button');
            sts.setAttribute('id','crebtn');
            sts.innerHTML = '作業中';
            return sts;
          }
          //削除ボタン生成処理
        const createRemoveBtn = () => {
            const rmv = document.createElement('button');
            rmv.setAttribute('id','rmvbtn');
            rmv.innerHTML = '削除';
            return rmv;
          }

        tbl.innerHTML = '';

        tasks.forEach((value,index) => {
            const tr  = document.createElement('tr');
            tr.appendChild(createTd(index));
            tr.appendChild(createTd(value.comment));
            tr.appendChild(createStatusBtn());
            tr.appendChild(createRemoveBtn());
            tbl.appendChild(tr);
        });

        document.getElementById('input').value = '';

    });

}