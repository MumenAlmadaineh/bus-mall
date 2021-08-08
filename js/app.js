'use strict';

let imgProductArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
    'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
    'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']

let imgProductSection = document.getElementById('imgProductSection');

let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');

let contTimeShow = 0;

let maxTimeShow = 25;

// console.log(imgProductSection);


function Product(imgName, imgSrc) {
    this.productName = imgName;
    this.imgPath = imgSrc;
    this.timeShowImg = 0;
    this.timeClick = 0;
    Product.productObjects.push(this);
}

Product.productObjects = [];


for (let i = 0; i < imgProductArray.length; i++) {
    new Product(imgProductArray[i].split('.')[0], imgProductArray[i]);
}


function setElemntToVariable() {
    let imgOneRandom = getRandomImgIndex(0, imgProductArray.length - 1);
    let imgTwoRandom = getRandomImgIndex(0, imgProductArray.length - 1);
    let imgTreeRandom = getRandomImgIndex(0, imgProductArray.length - 1);

    imgOne.src = 'img/' + Product.productObjects[imgOneRandom].imgPath;
    imgTwo.src = 'img/' + Product.productObjects[imgTwoRandom].imgPath;
    imgThree.src = 'img/' + Product.productObjects[imgTreeRandom].imgPath;

    
    // console.log(Product.productObjects[imgOneRandom].timeShowImg);
    // console.log(productArray[imgOneRandom].timeShowImg);

    Product.productObjects[imgOneRandom].timeShowImg++;
    Product.productObjects[imgTwoRandom].timeShowImg++;
    Product.productObjects[imgTreeRandom].timeShowImg++;

    // console.log(Product.productObjects)

    // console.log(Product.productObjects[imgOneRandom].imgPath.split('.')[0]);

    // for (let i = 0; i < imgProductArray.length; i++){
    // }


}

// console.log(productArray.timeShowImg);


setElemntToVariable();


imgProductSection.addEventListener('click', changeImg);
function changeImg(eventListener) {
    if ((eventListener.target.id === 'imgOne' || eventListener.target.id === 'imgTwo' || eventListener.target.id === 'imgThree') && contTimeShow < maxTimeShow ) {
        setElemntToVariable();
        contTimeShow++;
    }
}

// console.log(contTimeShow);

let stopButtom = document.getElementById('stopButton');

function removeHandler() {
    document.getElementById("imgProductSection").removeEventListener("click", changeImg);
  }


function getRandomImgIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// for (let i = 0; i < imgProductArray.length; i++){
//     console.log(imgProductArray[i].split('.')[0])
// }


// document.write(`${imgProductArray[i].split('.')[0]} had 3 votes, and was seen 3 times.`);

