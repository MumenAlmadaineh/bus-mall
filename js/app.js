'use strict';

let imgProductArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg',
    'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
    'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg', 'wine-glass.jpg']
    let pervImg = [];

    let namesArray = [];
    let shownArray = [];
    let clickArray = [];

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

function Product(imgName, imgSrc, show = 0, click = 0) {
    this.productName = imgName;
    this.imgPath = imgSrc;
    this.timeShowImg = show;
    this.timeClick = click;
    Product.productObjects.push(this);
}

Product.productObjects = [];

getData ();


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

    localStorage.data = JSON.stringify(Product.productObjects);
    console.log(Product.productObjects)

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

    } 
    // to show result in ul dirctly after 25 choose but it's not working file with local storage
    // else if (contTimeShow >= maxTimeShow) {
    //     for (let i = 0; i < imgProductArray.length; i++) {
    //         let resultUl = document.createElement('ul');
    //         resultDiv.appendChild(resultUl);
    //         let resultLi = document.createElement('li');
    //         resultUl.appendChild(resultLi);
    //         resultLi.textContent = `${Product.productObjects[i].productName} had ${Product.productObjects[i].timeClick} votes, and was seen ${Product.productObjects[i].timeShowImg} times.`;
    //     }
    // }
    if (contTimeShow >= maxTimeShow) {
        resultChart();
        resultChartPie();
    }
}

Product.prototype.getProduct = function() {
    console.log('prototype');
}

stopButton.addEventListener('click', stopAndShowResult);

function stopAndShowResult() {
    for (let i = 0; i < imgProductArray.length; i++) {
        let resultUl = document.createElement('ul');
        resultDiv.appendChild(resultUl);
        let resultLi = document.createElement('li');
        resultUl.appendChild(resultLi);
        resultLi.textContent = `${Product.productObjects[i].productName} had ${Product.productObjects[i].timeClick} votes, and was seen ${Product.productObjects[i].timeShowImg} times.`;
        console.log(Product.productObjects[i].timeClick);
    }
}


function removeHandler() {
    document.getElementById("imgProductSection").removeEventListener("click", changeImg);
}

function getRandomImgIndex(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function resultChart() {



    for(let i = 0; i < Product.productObjects.length; i++){
        
        namesArray.push(Product.productObjects[i].productName);
        shownArray.push(Product.productObjects[i].timeShowImg);
        clickArray.push(Product.productObjects[i].timeClick);
    }

    let ctx = document.getElementById('htmlElentChart').getContext('2d');
    let chartOfresult = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: namesArray,
            datasets: [{
                label: 'Votes',
                data: shownArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 2.5
            
        }, {

            label: 'Clicks',
                data: clickArray,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(248, 184, 23, 0.2)',
                ],
                borderWidth: 2.5
            }]
        },

        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


function resultChartPie() {
    let ctx = document.getElementById('htmlElentChartPie').getContext('2d');
    let chartOfresult = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: namesArray,
            datasets: [{
                label: 'Votes',
                data: shownArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1.5
            
        }, {

            label: 'Clicks',
                data: clickArray,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(248, 184, 23, 0.2)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1.5
            }]
        },

        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


function getData (){
    if (localStorage.data){
        let data = JSON.parse(localStorage.data);
        for (let i = 0; i < data.length; i++) {
            new Product(data[i].productName, data[i].imgPath, data[i].timeShowImg, data[i].timeClick);
        }
        console.log(data);
    } else{
        for (let i = 0; i < imgProductArray.length; i++) {
            new Product(imgProductArray[i].split('.')[0], imgProductArray[i]);
        }
    }
}