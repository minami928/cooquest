let img = new Array();

img[0] = new Image();
img[0].src = "img/img17.PNG";


var cnt=0;


//画像切り替え関数
function changeIMG(){
  
  //画像番号を進める
  if (cnt == 1)
  { cnt=0; }
  else
  { cnt++; }
  
  //画像を切り替える
  document.getElementById("btn").src=img[cnt].src;
}

setTimeout(function () {
    target = document.getElementById("abtn");

  }, 4000);