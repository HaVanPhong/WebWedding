let menubar= document.getElementById("menubar")
let menu= document.getElementById('menu');
let check=true;
menubar.addEventListener('click', (e)=>{
  if (check){
    menu.style.display='block';
    check= false;
  }else {
    menu.style.display='none';
    check= true;
  }
})