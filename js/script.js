let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

function validateform(){
    var name=document.Submission.name.value;
    var email=document.Submission.email.value;
    var number=document.Submission.number.value;
    var message=document.Submission.message.value; 
    var regex=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm;
   var err=document.getElementById("error");
    
   if(name==""){
       err.innerHTML='The Name is Empty'
       
       return false;
  }
  if(name.length<5){
   err.innerHTML='Name Should Contain five Elements Please Include Fullname';
       return false;
  }
  if(email=="")
{
   err.innerHTML='Email is Empty';
       return false;
}  
if(regex.test(email)==false){
   err.innerHTML='Invalid Email'
   return false
}
if(number=="")
{
   err.innerHTML='number is Empty';
       return false;
}  
if(number.length<10){
   err.innerHTML='Should Contain 10 Elements';
   return false
} 
if(message=="")
{
   err.innerHTML='message is Empty';
       return false;
}  
if(message.length<10){
   err.innerHTML='Should Contain 10 Words';
   return false
} 
if(message.length>100){
   err.innerHTML='Exceeds Limit';
   return false
} 
return true;

}