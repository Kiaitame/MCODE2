'use strict'
{
 document.getElementById('button').addEventListener('click', () => {
    const fizz = document.getElementById('fizz').value;
    const buzz = document.getElementById('buzz').value;
    
    //RegExp integer
    const reg = /^[0-9]+$/;
    if( reg.test(fizz) && reg.test(buzz) ){
        delmsg();
        for(let i = 1;i<100;i++){
            if (i % fizz == 0 && i % buzz == 0){
                msg("fizzbuzz",i);
            }else if(i % fizz == 0){
                msg("fizz",i);
            }else if(i % buzz == 0){
                msg("buzz",i);
            }
        }
    }else{
        delmsg();
        msg("整数値を入力してください",'');
    }

    function msg(str,num){
        const parent = document.getElementById('output');
        const out = document.createElement('p');
        out.textContent = str + num;
        parent.appendChild(out);
    }

    function delmsg(){
        const parent = document.getElementById('output');
        parent.textContent = '';
    }

});
}