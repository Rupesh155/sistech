// let h1= document.createElement('h1')
//  let div=  document.querySelector('div')

//  h1.innerText='hello'
//  div.append(h1)

//  console.log(React);
// 




// let h1 = React.createElement("div", null, 
// React.createElement('h1', null,React.createElement('p',null,)));

// function checkVowel(string) {
//     let count=0;
//     for(const i of string)
//     {
//         // console.log(i);
//         if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u" || i==="A" || i==="E" || i==="I" || i==="O" || i==="U")
//         {
//             count++;
//         }
//     }
//     return count;
// }

// let ans = checkVowel("rishi")
// console.log(ans);


function step1(fn){
    setTimeout(()=>{
        console.log('photo selecttt');
        fn('hello')
    },5000)
}
function step2(fn){
    setTimeout(()=>{
        console.log('filterrrrr');
        fn()
    },4000)
}
function step3(){
    setTimeout(()=>{
        console.log('captiosssssss');
    },3000)
}
function step4(){
    setTimeout(()=>{
        console.log('postttttt');
    },2000)
}


step1( (a)=>{
    step2(()=>{
        step3(()=>{
            step4()
        })
    })

})









