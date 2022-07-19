let GoBtn = document.querySelector('.go');
let UserInput = document.querySelector('#UserInput');
let HiddenNumber = document.querySelector('.HiddenNumber');
let Hint = document.querySelector('.Hint');
let NumberOfTry = document.querySelector('.NumberOfTry');
let ShowBtn = document.querySelector('.ShowBtn');


ShowBtn.addEventListener('click',()=>{
    HiddenNumber.classList.toggle('HiddenNumber_1')
    alert(`You lose the Hidden number is ${HiddenNumber.innerText}`)

    setTimeout(function clickShowHiddenNumber(){
        location.reload();
    },2000)
})

HiddenNumber.innerText = Math.floor(Math.random() * 50 + 1)

GoBtn.addEventListener('click',()=>{


    if(UserInput.value == ''){
        alert('Please Enter number')
    }else{

        NumberOfTry.innerText = NumberOfTry.innerText - 1;
        if(NumberOfTry.innerText == 0 && UserInput.value != HiddenNumber.innerText){
            alert("You lose! Nice try Please try again 🤪");
            location.reload();
        }

        if(UserInput.value > HiddenNumber.innerText){

            setTimeout(function PopUp(){

                Hint.style.backgroundColor = "rgba(0, 255, 157, 0.342)";
                Hint.innerHTML = "<b>Your Guess number is too high</b>";

                setTimeout(function closeHint(){
                    Hint.style.background = 'none';
                    Hint.innerHTML ='';
                },3000)

            },1000)

        }else if(UserInput.value < HiddenNumber.innerText){

            setTimeout(function PopUp(){

                Hint.style.backgroundColor = "rgba(255, 0, 34, 0.329)";
                Hint.innerHTML = "<b>Your Guess number is too low</b>";

                setTimeout(function closeHint(){
                    Hint.style.background = 'none';
                    Hint.innerHTML ='';
                },3000)

            },1000)
            
        }else{
            alert("Congratulation you guess the hidden number !!!");
            location.reload();
        }
    }
})

    
