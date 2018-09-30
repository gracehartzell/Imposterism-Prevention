const scopeQuiz = {
    //id or wait until db?
    name: 'JavaScript Scopes',
    questionCount: 10,
    questions: [
        {
        content: "After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 30;\n\nfunction get () { return x; }\n\nvar result = get(20);\n```",
        choices: [
            {
                text: "10",
                isAnswer: false
            },
            {
                text: "24",
                isAnswer: false
            },
            {
                text: "30",
                isAnswer: true
            },
            {
                text: "50",
                isAnswer: false
            }
        ],
        answer: {expected: [2], actual: []}
        } // ALL QUESTIONS CLOSE
    ]
}



