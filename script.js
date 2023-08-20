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
                answer: "undefined", 
                correct: false
            },
            {
                answer: "error", 
                correct: false
            },
            {
                answer: "hello world", 
                correct: true
            },
            {
                answer: "22", 
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
                answer: "65", 
                correct: false
            },
            {
                answer: "z", 
                correct: false
            },
            {
                answer: "undefined", 
                correct: false
            },
        ]
    },
    {
        code: "./beginner/ex3.PNG",
        options : [
            {
                answer: "khalid", 
                correct: false
            },
            {
                answer: "ahmed", 
                correct: false
            },
            {
                answer: "name", 
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
                answer: "130", 
                correct: false
            },
            {
                answer: "150", 
                correct: true
            },
            {
                answer: "50 * 3", 
                correct: false
            },
            {
                answer: "x", 
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
                answer: "string", 
                correct: false
            },
            {
                answer: "error", 
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
        code:  "./intermediate/ex1.PNG",
        options : [
            {
                answer: "Sara, Abeer, Nada", 
                correct: false
            },
            {
                answer: "error", 
                correct: false
            },
            {
                answer: "3", 
                correct: true
            },
            {
                answer: "totalStudents", 
                correct: false
            },
        ]
    },
    {
        code:  "./intermediate/ex2.PNG",
        options : [
            {
                answer: "0 1 3 4", 
                correct: true
            },
            {
                answer: "0 1", 
                correct: false
            },
            {
                answer: "1 2 3 4 5", 
                correct: false
            },
            {
                answer: "0 1 2 3 4", 
                correct: false
            },
        ]
    },
    {
        code: "./intermediate/ex3.PNG",
        options : [
            {
                answer: "error", 
                correct: false
            },
            {
                answer: "2", 
                correct: false
            },
            {
                answer: "3", 
                correct: false
            },
            {
                answer: "4", 
                correct: true
            },
        ]
    },
    {
        code: "./intermediate/ex4.PNG",
        options : [
            {
                answer: "Hello Hello Hello Hello", 
                correct: false
            },
            {
                answer: "Hello", 
                correct: true
            },
            {
                answer: "undefined", 
                correct: false
            },
            {
                answer: "Hello Hello Hello Hello Hello ", 
                correct: false
            },
        ]
    },
    {
        code: "./intermediate/ex5.PNG",
        options : [
            {
                answer: "hi", 
                correct: false
            },
            {
                answer: "welcome()", 
                correct: false
            },
            {
                answer: "undefined", 
                correct: false
            },
            {
                answer: "error", 
                correct: true
            },
        ]
    },
    
];
// lvl3
const advancedLevel = [
    {
        code:  "./advanced/ex1.PNG",
        options : [
            {
                answer: "10", 
                correct: false
            },
            {
                answer: "error", 
                correct: false
            },
            {
                answer: "3", 
                correct: true
            },
            {
                answer: "12", 
                correct: false
            },
        ]
    },
    {
        code:  "./advanced/ex2.PNG",
        options : [
            {
                answer: "Batman Superman", 
                correct: true
            },
            {
                answer: "Batman", 
                correct: false
            },
            {
                answer: "Superman", 
                correct: false
            },
            {
                answer: "error", 
                correct: false
            },
        ]
    },
    {
        code: "./advanced/ex3.PNG",
        options : [
            {
                answer: "true", 
                correct: false
            },
            {
                answer: "error", 
                correct: false
            },
            {
                answer: "undefined", 
                correct: false
            },
            {
                answer: "false", 
                correct: true
            },
        ]
    },
    {
        code: "./advanced/ex4.PNG",
        options : [
            {
                answer: "nothing", 
                correct: false
            },
            {
                answer: "d", 
                correct: true
            },
            {
                answer: "H e l l o  w o r l d", 
                correct: false
            },
            {
                answer: "'Hello' 'world'", 
                correct: false
            },
        ]
    },
    {
        code: "./advanced/ex5.PNG",
        options : [
            {
                answer: "false false", 
                correct: false
            },
            {
                answer: "true true", 
                correct: false
            },
            {
                answer: "true false", 
                correct: false
            },
            {
                answer: "false true", 
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
        restartbtn.classList.remove('hide');


        console.log(score);
        if(score >= 3) {
            Swal.fire({
                title: `Your Score: ${score}/5`,   
                imageUrl: 'meme3.jpeg',
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: 'Custom image',
              })
        }
        else {
            Swal.fire({
                title: `Your Score: ${score}/5 &#128078. Try Again`,
                imageUrl: 'meme2.jpeg',
                imageWidth: 400,
                imageHeight: 400,
                imageAlt: 'Custom image',
              })
        }
      }
}
