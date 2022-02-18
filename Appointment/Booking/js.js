let now= new Date();
let day= now.getDate();

let days= document.querySelectorAll(".dayele span");
let daySelect= document.getElementsByClassName("isSelect");


for (let i=0; i<days.length; i++){
  if (day===i+1){
    days[i].classList.add('isSelect');
  }
  days[i].addEventListener('click', (e)=>{
    console.log("object");
    daySelect[0].classList.remove('isSelect');
    days[i].classList.add('isSelect');
  })
}

let timeElements= document.getElementsByClassName("time-ele")
for (let i=0; i<timeElements.length; i++){
  timeElements[i].addEventListener('click', (e)=>{
    let timeS= document.getElementsByClassName('timeSelect');
    timeS[0].classList.remove('timeSelect');
    timeElements[i].classList.add('timeSelect');
  })
}