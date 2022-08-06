// const ELEMENT_BOX = document.getElementsByClassName('box')

// console.log('troioilatroi', ELEMENT_BOX.length)

// let maxHeight = 0
// for ( i=0; i<ELEMENT_BOX.length; i++) {

//     if (maxHeight<ELEMENT_BOX[i].offsetHeight) {
//         maxHeight=ELEMENT_BOX[i].offsetHeight
//     } 
//     // else {
//     //     maxHeight=maxHeight
//     // }
// }

// console.log(maxHeight)

// for ( i=0; i<ELEMENT_BOX.length; i++) {
//  ELEMENT_BOX[i].style.height=maxHeight 

// }

// const bideptrai = [5,5,3,3,3,1,2,2,2,2]
// let count5 = 0
// let count3 = 0
// let count1 = 0
// let count2 = 0

// for ( i=0; i<=10; i++) {
//     if (bideptrai[i]===5) {
//         count5 = count5 +1 
//     }
//     if (bideptrai[i]===3) {
//         count3 = count3 +1
//     }
//     if (bideptrai[i]===1) {
//         count1 = count1 +1
//     }
//     if (bideptrai[i]===2) {
//         count2 = count2 +1
//     }
// }
// console.log(count5)
// console.log(count3)
// console.log(count1)
// console.log(count2)


// const bideptraikhongngu ='cho chuoi bat ky tum lum tum la'

// for (i=0; i<=bideptraikhongngu.length;i++)



let agent = navigator.userAgent;
console.log(agent);

const position = agent.search('Chrome')

if(agent.search('Chrome') != -1) {
   
   document.body.style.backgroundColor = 'red'
}
else if (agent.search('Firefox') != -1) {
   
    document.body.style.backgroundColor = 'yellow'
}




// let ELEMENT_BOX = document.getElementById('box')

// let bidep = ['abc', 'cds', 'sas']
//  function printbidep(bidep) {
//     for ( let i=0; i<bidep.length;i++) {
//         setTimeout(function() {
//             ELEMENT_BOX.innerHTML = bidep[i];
//         }, 1000*i);
//     }
//  }
//  printbidep(bidep)