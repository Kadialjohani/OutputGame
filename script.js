let img = document.getElementById("img")
let choices = document.getElementById("choices")
let next = document.getElementById("next")
let beginner = document.getElementById("beginner")
let subContainer = document.getElementById("subContainer")



const beginnerLevel = [
    {
        code: img.src = "ex1.PNG",
        options : [
            {
                answer: "hello world", 
                correct: true
            },
            {
                answer: "undefined", 
                correct: false
            },
            {
                answer: "22", 
                correct: false
            },
            {
                answer: "false", 
                correct: false
            },
        ]
    },
    {
        code: img.src = "ex1.PNG",
        options : [
            {
                answer: "hellodfghjkll; world", 
                correct: true
            },
            {
                answer: "undefined", 
                correct: false
            },
            {
                answer: "22", 
                correct: false
            },
            {
                answer: "false", 
                correct: false
            },
        ]
    },
    {
        code: img.src = "ex1.PNG",
        options : [
            {
                answer: "hello dffcghvjkl;l;world", 
                correct: true
            },
            {
                answer: "undefined", 
                correct: false
            },
            {
                answer: "22", 
                correct: false
            },
            {
                answer: "false", 
                correct: false
            },
        ]
    },
    {
        code: img.src = "ex1.PNG",
        options : [
            {
                answer: "hello fghvjbnmk.,./world", 
                correct: true
            },
            {
                answer: "undefined", 
                correct: false
            },
            {
                answer: "22", 
                correct: false
            },
            {
                answer: "false", 
                correct: false
            },
        ]
    },
    {
        code: img.src = "ex1.PNG",
        options : [
            {
                answer: "hello worlvbnm,../d", 
                correct: true
            },
            {
                answer: "undefined", 
                correct: false
            },
            {
                answer: "22", 
                correct: false
            },
            {
                answer: "false", 
                correct: false
            },
        ]
    },
];

let randomQ;
let index;

beginner.addEventListener("click", start)
next.addEventListener("click", () => {
   index++
   nextCode() 
})

function start() {
    beginner.classList.add('hide')
    subContainer.classList.remove('hide')
    next.classList.remove('hide')
    
}

function nextCode() {

}

function showCode(){
    let currentCode = beginnerLevel[currentIndex];
    img.innerHTML = currentCode.code;

    currentCode.options.forEach(Options => {
        const button = document.createElement("button");
        button.innerHTML = options.answer;
        button.classList.add("btn");
        choices.appendChild(button);
    })
}

function reset() {

}

function selected(e) {
    
}

function setColor(answer, correct) {
    clearColor(answer)
}

function clearColor(answer) {

}