let btnSignin= document.getElementById('btnSignin');
let btn= document.getElementById('btn');
let formm= document.getElementById('form');

btnSignin.addEventListener('click', (e)=>{
  let username= document.getElementById('username').value;
  let password= document.getElementById('password').value;
  if (username=="admin" && password =="admin"){
    formm.action= "../home/index.html";
  }  
  formm.submit()
  console.log("object");
})