let btn1=document.getElementsByClassName("btn-1")[0];
let btn2=document.getElementsByClassName("btn-2")[0];
let cont=document.getElementsByClassName("content")[0];
let form=document.getElementsByTagName("form")[0];

if(window.location.pathname==="/page2"){
    btn2.disabled=true;
    btn2.classList.add("btnC");
}
else{
    btn1.disabled=true;
    btn1.classList.add("btnC");
    cont.classList.add("align");
    form.classList.add("form");
}
btn1.addEventListener('click',()=>{
    window.location.href="/page1";
   
})
btn2.addEventListener('click',()=>{
    window.location.href="/page2";
    
})