function fb(){
    var fizz = parseInt(document.getElementById('fizz').value);
    var buzz = parseInt(document.getElementById('buzz').value);
    if(!(Number.isInteger(fizz) && Number.isInteger(buzz))){
        check();
    }else{
        var fbarray = [fizz,buzz];
        var parent = document.getElementById('output');
        parent.textContent = '';
    }
    var fMulti = 0;
    var bMulti = 0;
    var str;

    for(var h = 2; fMulti < 100 && bMulti < 100 ; h++){
        fMulti = fizz * h;
        if(fMulti<100){
            fbarray.push(fMulti);
        }
        bMulti = buzz * h;
        if(bMulti<100){
            fbarray.push(bMulti);
        }    
    }
    console.log(fbarray);

    //sort
    fbarray.sort(function(first,second){
        return first - second;
    });


    console.log(fbarray);
    
    //重複削除
    var fbarray2 = fbarray.filter(function(x,i,self){
        return self.indexOf(x) === i;
    });
    
    console.log(fbarray2);
    
    function deletenode(){
        var outNode = document.createElement('p');
        var oldNode = document.getElementById('p');
        var parentNode = oldNode.parentNode;
        parentNode.replaceChild(outNode,oldNode);
    }

    function check(){
        var parent = document.getElementById('output');
        parent.textContent = '';
        var out = document.createElement('p');
        out.innerHTML = "整数値を入力してください";
        parent.appendChild(out);
    }

    function outtext(str){
        var parent = document.getElementById('output');
        var out = document.createElement('p');
        document.body.appendChild(out);
        out.innerHTML = str + fbarray2[i] + '\n';
        parent.appendChild(out);
    }
    for (var i = 0;i<fbarray.length;i++){
        if (fbarray2[i] % fizz === 0 && fbarray2[i] % buzz === 0){
            str = "fizzbuzz";
            outtext(str);
        }else if(fbarray2[i] % buzz === 0){
            str = "buzz";
            outtext(str);
        }else if(fbarray2[i] % fizz === 0){
            str = "fizz";
            outtext(str);
        }
    }

}
