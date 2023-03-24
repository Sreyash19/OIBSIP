 

let display = document.querySelector('#inputfield');
let btn = document.querySelectorAll('button');

let result = "";
let ar = Array.from(btn);
ar.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            result = eval(result);
            display.value = result;
        }

        else if(e.target.innerHTML == 'C'){
         result = "";
            display.value = result;
        }
        else if(e.target.innerHTML == 'DEL'){
         result = result.substring(0, result.length-1);
            display.value = result;
        }
        
        else{
         result += e.target.innerHTML;
            display.value = result;
        }
        
    })
})