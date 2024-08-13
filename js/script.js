let procuctImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    procuctImg.src = "../img/image1.png";
    for(btns of btn){
        btns.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    procuctImg.src = "../img/image2.png";
    for(btns of btn){
        btns.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    procuctImg.src = "../img/image3.png";
    for(btns of btn){
        btns.classList.remove("active");
    }
    this.classList.add("active");
}