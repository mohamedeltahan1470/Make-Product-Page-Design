

let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
    productImg.src = "./img/image1.png";
    updateActiveButton(this);
};

btn[1].onclick = function () {
    productImg.src = "./img/image2.png";
    updateActiveButton(this);
};

btn[2].onclick = function () {
    productImg.src = "./img/image3.png";
    updateActiveButton(this);
};

function updateActiveButton(activeBtn) {
    for (let button of btn) {
        button.classList.remove("active");
    }
    activeBtn.classList.add("active");
}
