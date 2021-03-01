function showimg1(){
    document.area1.src = "img/img05.PNG";

}
function showimg2(){
    document.area1.src = "img/img06.PNG";
    document.bottom.src="img/緑男.png";
}
function showimg3(){
    document.area1.src = "img/img07.PNG";
    document.bottom.src="img/ピンク女.png";
}
function showimg4(){
    document.area1.src = "img/img08.PNG";
    document.bottom.src="img/橙女.png";
}
function showimg5(){
    document.area1.src = "img/img10.PNG";
    document.bottom.src="img/ウサギ.png";
}
function showimg6(){
    document.area1.src = "img/img12.PNG";
    document.bottom.src="img/イヌ.png";
}
function showimg7(){
    document.area1.src = "img/img14.PNG";
    document.bottom.src="img/ネコ.png";
}


function getImage(){
    let arr=["img/img05.PNG","img/img06.PNG","img/img07.PNG","img/img08.PNG",
    "img/img10.PNG","img/img12.PNG","img/img14.PNG"];

    let obj=document.getElementById("aa");
    let test=Math.floor(Math.random()*arr.length);
    obj.src=arr[test];

    console.log(obj);
}