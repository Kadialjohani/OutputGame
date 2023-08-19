let img = document.getElementById("img")
let choices = document.getElementById("choices")
let next = document.getElementById("next")
let beginner = document.getElementById("beginner")
let intermediate = document.getElementById("intermediate")
let advanced = document.getElementById("advanced")
let subContainer = document.getElementById("subContainer")
let heading = document.getElementById("h2")
let restartbtn = document.getElementById("restart")




const beginnerLevel = [
    {
        code:  "./beginner/ex1.PNG",
        options : [
            {
                answer: "45", 
                correct: false
            },
            {
                answer: "undefined", 
                correct: false
            },
            {
                answer: "hello world", 
                correct: true
            },
            {
                answer: "false", 
                correct: false
            },
        ]
    },
    {
        code:  "./beginner/ex2.PNG",
        options : [
            {
                answer: "11", 
                correct: true
            },
            {
                answer: "error", 
                correct: false
            },
            {
                answer: "65", 
                correct: false
            },
            {
                answer: "'z' is not defined", 
                correct: false
            },
        ]
    },
    {
        code: "./beginner/ex3.PNG",
        options : [
            {
                answer: "name", 
                correct: false
            },
            {
                answer: "ahmed", 
                correct: false
            },
            {
                answer: "khalid", 
                correct: false
            },
            {
                answer: "error", 
                correct: true
            },
        ]
    },
    {
        code: "./beginner/ex4.PNG",
        options : [
            {
                answer: "50 * 3", 
                correct: false
            },
            {
                answer: "150", 
                correct: true
            },
            {
                answer: "x", 
                correct: false
            },
            {
                answer: "130", 
                correct: false
            },
        ]
    },
    {
        code: "./beginner/ex5.PNG",
        options : [
            {
                answer: "any", 
                correct: false
            },
            {
                answer: "error", 
                correct: false
            },
            {
                answer: "string", 
                correct: false
            },
            {
                answer: "undefined", 
                correct: true
            },
        ]
    },
    
];
// lvl2
const intermediateLevel = [
    {
        code:  "./beginner/ex1.PNG",
        options : [
            {
                answer: "int", 
                correct: false
            },
            {
                answer: "int", 
                correct: false
            },
            {
                answer: "h", 
                correct: true
            },
            {
                answer: "f", 
                correct: false
            },
        ]
    },
    {
        code:  "./beginner/ex2.PNG",
        options : [
            {
                answer: "11", 
                correct: true
            },
            {
                answer: "error", 
                correct: false
            },
            {
                answer: "65", 
                correct: false
            },
            {
                answer: "'z' is not defined", 
                correct: false
            },
        ]
    },
    {
        code: "./beginner/ex3.PNG",
        options : [
            {
                answer: "name", 
                correct: false
            },
            {
                answer: "ahmed", 
                correct: false
            },
            {
                answer: "khalid", 
                correct: false
            },
            {
                answer: "error", 
                correct: true
            },
        ]
    },
    {
        code: "./beginner/ex4.PNG",
        options : [
            {
                answer: "50 * 3", 
                correct: false
            },
            {
                answer: "150", 
                correct: true
            },
            {
                answer: "x", 
                correct: false
            },
            {
                answer: "130", 
                correct: false
            },
        ]
    },
    {
        code: "./beginner/ex5.PNG",
        options : [
            {
                answer: "any", 
                correct: false
            },
            {
                answer: "error", 
                correct: false
            },
            {
                answer: "string", 
                correct: false
            },
            {
                answer: "undefined", 
                correct: true
            },
        ]
    },
    
];
// lvl3
const advancedLevel = [
    {
        code:  "./beginner/ex1.PNG",
        options : [
            {
                answer: "add", 
                correct: false
            },
            {
                answer: "", 
                correct: false
            },
            {
                answer: "", 
                correct: true
            },
            {
                answer: "", 
                correct: false
            },
        ]
    },
    {
        code:  "./beginner/ex2.PNG",
        options : [
            {
                answer: "11", 
                correct: true
            },
            {
                answer: "error", 
                correct: false
            },
            {
                answer: "65", 
                correct: false
            },
            {
                answer: "'z' is not defined", 
                correct: false
            },
        ]
    },
    {
        code: "./beginner/ex3.PNG",
        options : [
            {
                answer: "name", 
                correct: false
            },
            {
                answer: "ahmed", 
                correct: false
            },
            {
                answer: "khalid", 
                correct: false
            },
            {
                answer: "error", 
                correct: true
            },
        ]
    },
    {
        code: "./beginner/ex4.PNG",
        options : [
            {
                answer: "50 * 3", 
                correct: false
            },
            {
                answer: "150", 
                correct: true
            },
            {
                answer: "x", 
                correct: false
            },
            {
                answer: "130", 
                correct: false
            },
        ]
    },
    {
        code: "./beginner/ex5.PNG",
        options : [
            {
                answer: "any", 
                correct: false
            },
            {
                answer: "error", 
                correct: false
            },
            {
                answer: "string", 
                correct: false
            },
            {
                answer: "undefined", 
                correct: true
            },
        ]
    },
    
];

let randomCode;
let index;
// score
let score = 0;


beginner.addEventListener("click", startBeginnerLevel)
intermediate.addEventListener("click", startIntermediateLevel)
advanced.addEventListener("click", startAdvancedLevel)

restartbtn.addEventListener("click", restart)  //make it return to first page

next.addEventListener("click", () => {
   index++
   nextCode() 
})

function restart() {
    subContainer.classList.add('hide')
    beginner.classList.remove('hide')
    intermediate.classList.remove('hide')
    advanced.classList.remove('hide')
    heading.classList.remove('hide')
    restartbtn.classList.add('hide')
    score = 0

}

function startBeginnerLevel() {
    beginner.classList.add('hide')
    intermediate.classList.add('hide')
    advanced.classList.add('hide')
    heading.classList.add('hide')
    subContainer.classList.remove('hide')
    next.classList.remove('hide')
    index = 0;
    randomCode = beginnerLevel
    nextCode()
    
}

function startIntermediateLevel() {
    beginner.classList.add('hide')
    intermediate.classList.add('hide')
    advanced.classList.add('hide')
    heading.classList.add('hide')
   
    subContainer.classList.remove('hide')
    next.classList.remove('hide')
    index = 0;
    randomCode = intermediateLevel
    nextCode()
    
}

function startAdvancedLevel() {
    beginner.classList.add('hide')
    intermediate.classList.add('hide')
    advanced.classList.add('hide')
    heading.classList.add('hide')
    
    subContainer.classList.remove('hide')
    next.classList.remove('hide')
    index = 0;
    randomCode = advancedLevel
    nextCode()
    
}

function nextCode() {
    reset()
    showCode(randomCode[index])
}

function showCode(code){
    //loop img
    img.src = code.code;
    // loop answers
    code.options.forEach(answer => {
        const button = document.createElement("button");
        button.className = 'border border-white border-1 p-3 rounded m-2 w-50 btn btn-dark'
        button.innerText = answer.answer;
        if (answer.correct) {
            button.dataset.correct = answer.correct
            
            // console.log(answer);
        }
        button.addEventListener('click', selected)
        choices.appendChild(button)
    })
}

function reset() {
    next.classList.add('hide');
    while (choices.firstChild) {
        choices.removeChild(choices.firstChild)
    }
}

function selected(e) {
    const userSelect = e.target
    const correct = userSelect.dataset.correct

    if (correct) {
        // userSelect.classList.add("correct")
        userSelect.className = 'border border-white border-1 p-3 rounded m-2 w-50 btn btn-success'
        score += 1
  
    }
    else {
        userSelect.className = 'border border-white border-1 p-3 rounded m-2 w-50 btn btn-danger'
    }
    Array.from(choices.children).forEach(button => {
        if (button.dataset.correct) {
            button.className = 'border border-white border-1 p-3 rounded m-2 w-50 btn btn-success'
        }
      })

      if (randomCode.length > index + 1) {
        next.classList.remove('hide'); 
      }
      else {
        restartbtn.classList.remove('hide')
        console.log(score);
        
        // beginner.className = 'w-50 rounded'
      }
      

      

    
}

// function setColor(el, correct) {
//     clearColor(answer)
// }

// function clearColor(el) {

// }

