'use strict';

let imgProductArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
    'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
    'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']

let imgProductSection = document.getElementById('imgProductSection');

let imgOne = document.getElementById('imgOne');
let imgTwo = document.getElementById('imgTwo');
let imgThree = document.getElementById('imgThree');

let stopButtom = document.getElementById('stopButton');

let resultDiv = document.getElementById('result');

let contTimeShow = 0;

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
    let imgOneRandom = getRandomImgIndex(0, imgProductArray.length - 1);
    let imgTwoRandom = getRandomImgIndex(0, imgProductArray.length - 1);
    let imgTreeRandom = getRandomImgIndex(0, imgProductArray.length - 1);

    imgOne.src = 'img/' + Product.productObjects[imgOneRandom].imgPath;
    imgTwo.src = 'img/' + Product.productObjects[imgTwoRandom].imgPath;
    imgThree.src = 'img/' + Product.productObjects[imgTreeRandom].imgPath;


    // console.log(Product.productObjects[0].timeShowImg);
    // console.log(productArray[imgOneRandom].timeShowImg);

    Product.productObjects[imgOneRandom].timeShowImg++;
    Product.productObjects[imgTwoRandom].timeShowImg++;
    Product.productObjects[imgTreeRandom].timeShowImg++;


    Product.productObjects[imgOneRandom].timeClick;
    Product.productObjects[imgTwoRandom].timeClick;
    Product.productObjects[imgTreeRandom].timeClick;


    // for (let i = 0; i < imgProductArray.length; i++){
    //     console.log(Product.productObjects[i].productName);
    // }

    // console.log(`banana had 3 votes, and was seen 5 times.`)


}

// console.log(productArray.timeShowImg);


setElemntToVariable();


imgProductSection.addEventListener('click', changeImg);
function changeImg(eventListener) {
    if ((eventListener.target.id === 'imgOne' || eventListener.target.id === 'imgTwo' || eventListener.target.id === 'imgThree') && contTimeShow < maxTimeShow) {
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
}



// console.log(contTimeShow);


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

