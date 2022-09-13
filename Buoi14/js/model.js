// Tạo số bí mật
function secretNumber() {
    return Math.floor(1 + Math.random() * 30);
}

// Khởi tạo số bị mật 1-30 truyền vào Html

function renderNumber() {
    var number = ''
    var length = 30
    for (var i = 1; i <= length; i++) {
        number += `<li>
        <button ${numberSecret = '' ? false : 'onclick=setFocus(' + i + ')'} id="numberList${i}" class="number">${i}</button>
        </li>`
    }
    return ELEMENT_NUMBER_BOX.innerHTML = number
}

// Click vào số bí mật được truyền

function setFocus(clicked_number) {
    if (n <= 5) {
        number = ELEMENT_NUMBER[clicked_number - 1]


        // số click nhỏ hơn số bí mật
        if (clicked_number < numberSecret) {
            number.style.backgroundColor = 'blue'
            elementResult1 = ` <h5 class="result-heading">Wrong!</h5>
                             <p id="result1">Số ${number.innerText} của bạn nhỏ hơn số bí ẩn</p>`
            ELEMENT_HEART[nTim - 1].style.color = 'White'
            arrData.push({ item: elementResult1 })
            showScore()


            // Số click lớn hơn số bí mật
        } else if (clicked_number > numberSecret) {
            number.style.backgroundColor = 'blue'
            elementResult1 = `<h5 class="result-heading">Wrong!</h5>
                             <p id="result1">Số ${number.innerText} của bạn lớn hơn số bí ẩn</p>`
            ELEMENT_HEART[nTim - 1].style.color = 'White'
            arrData.push({ item: elementResult1 })
            showScore()

            // Số click băng số bí mật
        } else if (clicked_number == numberSecret) {
            number.style.backgroundColor = 'blue'
            ELEMENT_RESULT4.innerHTML = `<h5 class="result-heading color">Correct</h5>`
            // ELEMENT_NUMBER_SECRET.innerHTML = `<h3>Số bí ẩn</h3> <span class="score-answer-number">${numberSecret}</span>`
            n = 6
            return
        }
        n++
        nTim--
    }
}

//Show score
function showScore() {
    for (let k = 0; k < arrData.length; k++) {
        var arrItem = arrData[k].item
    }
    ELEMENT_RESULT.innerHTML += arrItem
}

// btn

// BTN.addEventListener('click', function onclick() {
//     document.BTN.style.background = 'red';
// })
