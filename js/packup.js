'use strict';

let imgProductArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
    'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
    'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']

let imgProductSection = document.getElementById('imgProductSection');

let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');

let productArray = [];

function Product(imgName, imgSrc) {
    this.productName = imgName;
    this.imgPath = imgSrc;
    this.timeShowImg = 0;
    this.timeClick = 0;
    productArray.push(this);
}
// console.log(productArray.timeShowImg)


for (let i = 0; i < imgProductArray.length; i++) {
    new Product(imgProductArray[i].split('.')[0], imgProductArray[i]);
}

// console.log(productArray);

function setElemntToVariable() {
    let imgOneRandom = getRandomImgIndex(0, imgProductArray.length - 1);
    let imgTwoRandom = getRandomImgIndex(0, imgProductArray.length - 1);
    let imgTreeRandom = getRandomImgIndex(0, imgProductArray.length - 1);

    // console.log()

    // imgOne.src = 'img/' + imgProductArray[imgOneRandom];
    // imgTwo.src = 'img/' + imgProductArray[imgTwoRandom];
    // imgThree.src = 'img/' + imgProductArray[imgTreeRandom];

    imgOne.src = 'img/' + imgProductArray[imgOneRandom];
    imgTwo.src = 'img/' + imgProductArray[imgTwoRandom];
    imgThree.src = 'img/' + imgProductArray[imgTreeRandom];

    
    // console.log(imgProductArray[imgOneRandom]);
    // console.log(productArray[imgOneRandom].timeShowImg);

    productArray[imgOneRandom].timeShowImg++;
    productArray[imgTwoRandom].timeShowImg++;
    productArray[imgTreeRandom].timeShowImg++;

}

console.log(productArray);


setElemntToVariable();


imgProductSection.addEventListener('click', changeImg);
function changeImg(eventListener) {
    if (eventListener.target === imgOne || eventListener.target === imgTwo || eventListener.target === imgThree) {
        setElemntToVariable();
    }
    // console.log(eventListener);
}



function getRandomImgIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}