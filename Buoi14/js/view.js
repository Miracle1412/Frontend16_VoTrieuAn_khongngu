

renderNumber()

ELEMENT_START_BUTTON.addEventListener('click', function(){
    if (number == '') {
        numberSecret = secretNumber()
        console.log(numberSecret)
    } else {

    }
})

ELEMENT_RESET_BUTTON.addEventListener('click', function () {
    location.reload()
    return;
})
