const screen=document.getElementById('num');
const key=document.querySelectorAll('.key');
let screenval='';
for (const item of key) {
    item.addEventListener('click',(e)=>{
        let val=e.target.innerText;
        
        if (val=='RESET') {
            screenval='';
            screen.value='';
        }
        else if(val=='DEL'){
            screenval=screenval.substr(0,(screenval.length-1));
            screen.value=screenval;
        }
        else if(val=='=') {
            screenval=eval(screenval);
            screen.value=screenval;
        } 
        else if(val=='x'){
            val='*';
            screenval+=val;
            screen.value=screenval;
        }
        else if(val=='/'){
            val='/';
            screenval+=val;
            screen.value=screenval;
        }
        else if(val=='+'){
            val='+';
            screenval+=val;
            screen.value=screenval;
        }
        else if(val=='-'){
            val='-';
            screenval+=val;
            screen.value=screenval;
        }
        else{
            screenval+=val;
            screen.value=screenval;
        }
        
    })
    
  }
