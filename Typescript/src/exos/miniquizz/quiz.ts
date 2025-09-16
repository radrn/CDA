// import {questions, options, correctAnswers} from "./questions";
// import {checkAnswer} from "./quizUtils";
// import {updateScore} from "./quizUtils";

import {options, questions, correctAnswers} from "./questions";

let step: number = 0;
let point:number = 0;
const score:HTMLParagraphElement|null = document.querySelector('#score')

function showQuestion(){


    if(step === questions.length){
        const para:HTMLParagraphElement = document.createElement('p');
        para.innerHTML = 'Quiz terminé !'
        document.body.appendChild(para);
        
    } else {
        const newQuestion = document.createElement("p");
        newQuestion.innerHTML = questions[step];
        document.body.appendChild(newQuestion);

        const Select = document.createElement('select');
        for (let i:number=0 ; i< options[step].length; i++){
            const Option:HTMLOptionElement = document.createElement('option');
            Option.innerHTML = options[step][i].toString();
            Select.appendChild(Option);
        }
        document.body.appendChild(Select);

        const btn:HTMLButtonElement = document.createElement("button");
        btn.innerHTML = "submit";
        document.body.appendChild(btn);
        btn.addEventListener('click', ()=>{
            console.log(Select.value);
            console.log(correctAnswers[step]);
            if(Select.value === correctAnswers[step].toString()){
                point += 20;
                if(score !== null){
                    score.innerHTML = "Score: " + point;
                }
            }
            step++
            newQuestion.remove()
            Select.remove()
            btn.remove()
            showQuestion()
        })
    }
}

showQuestion()