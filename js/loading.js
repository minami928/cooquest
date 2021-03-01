window.onload=function(){

  let slider=document.getElementById("slider");

  let sliderItems=slider.getElementsByTagName("li");

  let nextBtn=document.getElementById("next");

  let prevBtn=document.getElementById("prev");

  let circle = document.querySelectorAll(".circle");

  console.log(circle);

  circle[0].style.fill = "#DD6847";

  nextBtn.onclick = ()=>{
      console.log("aa");
  } 

  let count=0;




  

  nextBtn.onclick=function(event){
      let nextCount;

      if(count<sliderItems.length-1){
          nextCount=count+1;
      }
      else{
          nextCount=count-2;
      }

      circle[count].style.fill = "#FFF";
      circle[nextCount].style.fill = "#DD6847";


      sliderItems[count].style.display="none";
      sliderItems[nextCount].style.display="block";
      count=nextCount;
  }

  prevBtn.onclick=function(event){
      let prevCount;

      if(count<sliderItems.length-2){

          prevCount=count+2;
      }
      else{

          prevCount=count-1;
      }
      circle[count].style.fill = "#FFF";
      circle[prevCount].style.fill = "#DD6847";


      sliderItems[count].style.display="none";
      sliderItems[prevCount].style.display="block";

      count=prevCount;
  }
}