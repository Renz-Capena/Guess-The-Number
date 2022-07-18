let GoBtn = document.querySelector('.go');
let UserInput = document.querySelector('#UserInput');
let HiddenNumber = document.querySelector('.HiddenNumber');
let Hint = document.querySelector('.Hint');
let NumberOfTry = document.querySelector('.NumberOfTry');
let ShowBtn = document.querySelector('.ShowBtn');


ShowBtn.addEventListener('click',()=>{
    HiddenNumber.style.backgroundColor = "lightgreen"
})

HiddenNumber.innerText = Math.floor(Math.random() * 50 + 1)

GoBtn.addEventListener('click',()=>{


    if(UserInput.value == ''){
        alert('Please Enter number')
    }else{

        NumberOfTry.innerText = NumberOfTry.innerText - 1;
        if(NumberOfTry.innerText == 0){
            alert("Talo ka Please Try again");
            location.reload();
        }

        if(UserInput.value > HiddenNumber.innerText){
            Hint.innerHTML = "<b>Your input is Greater than</b>"
        }else if(UserInput.value < HiddenNumber.innerText){
            Hint.innerHTML = "<b>Your input is Less than</b>"
        }else{
            alert("Wow your guess the hidden number");
            location.reload();
        }
    }
})

    