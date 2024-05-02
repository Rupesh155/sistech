// // // let h1= document.createElement('h1')
// // //  let div=  document.querySelector('div')

// // //  h1.innerText='hello'
// // //  div.append(h1)

// // //  console.log(React);
// // // 




// // // let h1 = React.createElement("div", null, 
// // // React.createElement('h1', null,React.createElement('p',null,)));

// // // function checkVowel(string) {
// // //     let count=0;
// // //     for(const i of string)
// // //     {
// // //         // console.log(i);
// // //         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u" || i==="A" || i==="E" || i==="I" || i==="O" || i==="U")
// // //         {
// // //             count++;
// // //         }
// // //     }
// // //     return count;
// // // }

// // // let ans = checkVowel("rishi")
// // // console.log(ans);


// // function step1(fn){
// //     setTimeout(()=>{
// //         console.log('photo selecttt');
// //         fn('hello')
// //     },5000)
// // }
// // function step2(fn){
// //     setTimeout(()=>{
// //         console.log('filterrrrr');
// //         fn()
// //     },4000)
// // }
// // function step3(){
// //     setTimeout(()=>{
// //         console.log('captiosssssss');
// //     },3000)
// // }
// // function step4(){
// //     setTimeout(()=>{
// //         console.log('postttttt');
// //     },2000)
// // }


// // step1( (a)=>{
// //     step2(()=>{
// //         step3(()=>{
// //             step4()
// //         })
// //     })

// // })







// // let promise=   new Promise((resolve ,reject)=>{
// //     resolve()
// //     // reject()

// // })
// // promise.then(()=>{
// //     console.log('hello');
// // }).catch(()=>{
// //     console.log('hiiiii');
// // })

// // // console.log(promise,"hehehe");

// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let boardHeight = 600;
// let boardWidth = 1000;
// let square = 50;

// let snakeCells = [[0,0]];

// let direction = 'right';

// let gameOver = false;

// let foodCell = generateRandomCell();

// let score = 0;

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'ArrowLeft') {
//     direction = 'left';
//   } else if (event.key === 'ArrowDown') {
//     direction = 'down';
//   } else if (event.key === 'ArrowRight') {
//     direction = 'right';
//   } else {
//     direction = 'up';
//   }
// })

// let intervalId = setInterval(function() {
//   update();
//   draw();
// }, 100);

// function update() {
//   let headX = snakeCells[snakeCells.length - 1][0];
//   let headY = snakeCells[snakeCells.length - 1][1];

//   let newX;
//   let newY;

//   if (direction === 'right') {
//     newX = headX + square;
//     newY = headY;

//     if (newX === boardWidth) {
//       gameOver = true;
//     }
    
//   } else if (direction === 'left') {
//     newX = headX - square;
//     newY = headY;

//     if (newX < 0) {
//       gameOver = true;
//     }

//   } else if (direction === 'up') {
//     newX = headX;
//     newY = headY - square;

//     if (newY < 0) {
//       gameOver = true;
//     }

//   } else {
//     newX = headX;
//     newY = headY + square;

//     if (newY === boardHeight) {
//       gameOver = true;
//     }
//   }

//   snakeCells.push([newX, newY]);

//   if (foodCell[0] === headX && foodCell[1] === headY) {
//     foodCell = generateRandomCell();
//     score += 1;
//   } else {
//     snakeCells.shift();
//   }
// }

// function draw() {

//   if (gameOver === true) {
//     clearInterval(intervalId);
//     ctx.fillStyle = 'red';
//     ctx.font = '40px sans-serif';
//     ctx.fillText('Game over', 50, 150);
//     return;
//   }

//   ctx.clearRect(0, 0, boardWidth, boardHeight);
//   for (let cell of snakeCells) {
//     ctx.fillStyle = 'yellow';
//     ctx.fillRect(cell[0], cell[1], square, square);
//     ctx.fillStyle = 'red';
//     ctx.strokeRect(cell[0], cell[1], square, square);
//   }

//   ctx.fillStyle = 'red';
//   ctx.fillRect(foodCell[0], foodCell[1], square, square);
//   ctx.fillStyle = 'yellow';

//   // draw score
//   ctx.fillStyle = 'white';
//   ctx.font = '20px sans-serif';
//   ctx.fillText(`Score: ${score}`, 50, 50);
// }

// function generateRandomCell() {
//   return [
//     Math.round((Math.random()*(boardWidth - square))/square)*square,
//     Math.round((Math.random()*(boardHeight - square))/square)*square
//   ]
// }

 let canvas=    document.querySelector('canvas')
   let ctx=       canvas.getContext('2d')
   ctx.fillStyle='red'
let snakeCells=[[0,0]]
let cell=50

let direction='right'
let gameOver=false
let id=     setInterval(() => {
    draw()
    update()
    
}, 100);




document.addEventListener('keydown',(e)=>{
    // console.log(e,'chal gyaaaa');
    if(e.key==='ArrowDown'){
        direction='down'
    }
   else if(e.key==='ArrowUp'){
    direction='Up'
   }
   else if( e.key==='ArrowLeft'){
    direction='left'
   }
   else{
    direction='right'
   }

})




function draw(){

    if(gameOver){
        clearInterval(id)
        return
    }
    ctx.clearRect(0,0,1800,900)
    for(let i of snakeCells){
        ctx.fillRect(i[0],i[1],cell,cell)

    }
    
}
function update(){
     let headX=  snakeCells[snakeCells.length-1][0]
    let headY=   snakeCells[snakeCells.length-1][1]

    let newX
    let newY

    if(direction==='right'){
        newX=headX+cell
        newY=headY
        if(newX===1800){
            gameOver=true
        }
    }
    else if( direction==='Up'){
        newX =headX
        newY=headY-cell
        if(newY<0){
            gameOver=true
        }
    }
    else if( direction ==='left'){
        newX=headX-cell
        newY=headY
        if(newX<0){
            gameOver=true
        }
    }
    else{
        newX =headX
        newY=headY+cell
        if(newY===900){
            gameOver=true

        }
    }

    snakeCells.push([newX,newY])
    snakeCells.shift()


}




console.log(Math.random()* 1800,"X");
console.log(Math.random()* 900,"Y");
















