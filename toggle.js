const theme_1=document.getElementById('theme_1');
const theme_2=document.getElementById('theme_2');
const theme_3=document.getElementById('theme_3');
const body=document.body;
const circle=document.getElementById('toggle-circle');
const theme=localStorage.getItem('theme');
const changebg=document.getElementById("changebg");

const checkbg=()=>{
    if (body.classList.contains('theme1')) {
        changebg.style.color="white";
    }
    else{
        changebg.removeAttribute('style');
    }

}

const themeUpdate=(mytheme)=>{
    if (body.classList.contains('theme1')){
        body.classList.replace('theme1',mytheme);
        
    }
    
    else if(body.classList.contains('theme2')) {
        body.classList.replace('theme2',mytheme);
    
    }
    else if(body.classList.contains('theme3')) {
        body.classList.replace('theme3',mytheme);
    }
    checkbg();
}
checkbg();
theme_1.addEventListener('click',()=>{
    themeUpdate('theme1');
    circle.style.justifyContent='flex-start';
});

theme_2.addEventListener('click',()=>{
    themeUpdate('theme2');
    circle.style.justifyContent='center';
});

theme_3.addEventListener('click',()=>{
    themeUpdate('theme3');
    circle.style.justifyContent='flex-end';
});