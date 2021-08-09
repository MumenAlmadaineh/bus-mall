'use strict';

let imgProductArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
    'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
    'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']
    let pervImg = [];
let imgProductSection = document.getElementById('imgProductSection');

let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');

let stopButtom = document.getElementById('stopButton');

let resultDiv = document.getElementById('result');

let contTimeShow = 0;


let imgOneRandom = 0;
let imgTwoRandom = 0;
let imgThreeRandom = 0;


let maxTimeShow = 25;

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
    do {
        imgOneRandom = getRandomImgIndex(0, imgProductArray.length - 1);
        imgTwoRandom = getRandomImgIndex(0, imgProductArray.length - 1);
        imgThreeRandom = getRandomImgIndex(0, imgProductArray.length - 1);
    } while (imgOneRandom === imgTwoRandom || imgTwoRandom === imgThreeRandom || imgOneRandom === imgThreeRandom || pervImg.includes(imgOneRandom) || pervImg.includes(imgTwoRandom) || pervImg.includes(imgThreeRandom))

    pervImg = [imgOneRandom, imgTwoRandom, imgThreeRandom]


    imgOne.src = 'img/' + Product.productObjects[imgOneRandom].imgPath;
    imgTwo.src = 'img/' + Product.productObjects[imgTwoRandom].imgPath;
    imgThree.src = 'img/' + Product.productObjects[imgThreeRandom].imgPath;

    Product.productObjects[imgOneRandom].timeShowImg++;
    Product.productObjects[imgTwoRandom].timeShowImg++;
    Product.productObjects[imgThreeRandom].timeShowImg++;


    // Product.productObjects[imgOneRandom].timeClick;
    // Product.productObjects[imgTwoRandom].timeClick;
    // Product.productObjects[imgThreeRandom].timeClick;

    // console.log(`banana had 3 votes, and was seen 5 times.`)


}
setElemntToVariable();
imgProductSection.addEventListener('click', changeImg);
function changeImg(eventListener) {
    if ((eventListener.target.id === 'imgOne' || eventListener.target.id === 'imgTwo' || eventListener.target.id === 'imgThree') && contTimeShow < maxTimeShow) {
        if (eventListener.target.id === 'imgOne') {
            Product.productObjects[imgOneRandom].timeClick++;
        }

        if (eventListener.target.id === 'imgTwo') {
            Product.productObjects[imgTwoRandom].timeClick++;
        }

        if (eventListener.target.id === 'imgThree') {
            Product.productObjects[imgTwoRandom].timeClick++;
        }

        setElemntToVariable();
        contTimeShow++;

    } else if (contTimeShow >= maxTimeShow) {
        for (let i = 0; i < imgProductArray.length; i++) {
                // console.log(`banana had 3 votes, and was seen 5 times.`)
                // console.log(`banana had 3 votes, and was seen 5 times.`)
            let resultUl = document.createElement('ul');
            resultDiv.appendChild(resultUl);
            let resultLi = document.createElement('li');
            resultUl.appendChild(resultLi);
            resultLi.textContent = `${Product.productObjects[i].productName} had ${Product.productObjects[i].timeShowImg} votes, and was seen ${Product.productObjects[i].timeClick} times.`;
            // console.log(Product.productObjects[i].timeClick);
        }
    }
    // else if (contTimeShow >= maxTimeShow) {
    //     for (let i = 0; i < imgProductArray.length; i++) {
    //         let resultUl = document.createElement('ul');
    //         resultDiv.appendChild(resultUl);
    //         let resultLi = document.createElement('li');
    //         resultUl.appendChild(resultLi);
    //         resultLi.textContent = `${Product.productObjects[i].productName} had ${Product.productObjects[i].timeClick} votes, and was seen ${Product.productObjects[i].timeShowImg} times.`;
    //     }
    // }
}

stopButton.addEventListener('click', stopAndShowResult);

function stopAndShowResult() {
    for (let i = 0; i < imgProductArray.length; i++) {
        let resultUl = document.createElement('ul');
        resultDiv.appendChild(resultUl);
        let resultLi = document.createElement('li');
        resultUl.appendChild(resultLi);
        resultLi.textContent = `${Product.productObjects[i].productName} had ${Product.productObjects[i].timeClick} votes, and was seen ${Product.productObjects[i].timeShowImg} times.`;
    }
}

function removeHandler() {
    document.getElementById("imgProductSection").removeEventListener("click", changeImg);
}

function getRandomImgIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}