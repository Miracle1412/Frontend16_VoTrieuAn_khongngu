let clickbox=false

function myFunction() {
    const MY_ELEMENT = document.getElementById('box');
   
    MY_ELEMENT.style.backgroundColor = "red"
    clickbox ? MY_ELEMENT.style.backgroundColor = 'red' : MY_ELEMENT.style.backgroundColor = 'black'
    clickbox = !clickbox
}