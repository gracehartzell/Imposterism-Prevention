let questions =[
    {   "id": "666",
        "name": "Javascript Promises",
        "questionCount":10,
        "difficulty": 5,
        "questions": [
            {
                "id":1,
                "choices": [
                    {"text":"`[\"JS\", \"NODE\", \"REACT\"]`","isAnswer":false},
                    {"text":"`[\"js\", \"node\", \"react\"]`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"JS\", \"NODE\", \"REACT\"]`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"js\", \"node\", \"react\"]`","isAnswer":true},
                    {"text":"a Promise object that resolves with `null`","isAnswer":false}
                ],
                "content":"Assume `fetchTags()` returns a Promise that will eventually resolve with `[\"js\", \"node\", \"react\"]`.\n\nWhen all promises resolve, what will be the final value of `result`?\n\n",
                "code_snippet": "\nvar result = fetchTags() \n  .then(function(tags) { \n    return tags\n  })\n",
                "index":0,
                "isCorrect":false,
                "answer": 
                    {"expected":[4], "actual":[]}
            },

            { 
                "id":2,
                "choices": [
                    {"text":"`[\"JS\", \"NODE\", \"REACT\"]`","isAnswer":false},
                    {"text":"`[\"js\", \"node\", \"react\"]`","isAnswer":false},
                    {"text":"`null`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"JS\", \"NODE\", \"REACT\"]`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"js\", \"node\", \"react\"]`","isAnswer":true}
                ],
                "content":"Assume `fetchTags()` returns a Promise that will eventually resolve with `[\"js\", \"node\", \"REACT\"]`.\n\nWhen all promises resolve, what will be the final value of `result`?\n\n    ",
                "code_snippet": "var result = fetchTags();",
                "index":1,
                "isCorrect":false,
                "answer": {
                    "expected":[4],"actual":[]}
            },
            {
                "id":3,
                "choices":[
                    {"text":"`[\"JS\", \"NODE\", \"REACT\"]`","isAnswer":false},
                    {"text":"`[\"js\", \"node\", \"REACT\"]`","isAnswer":false},
                    {"text":"`null`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"JS\", \"NODE\", \"REACT\"]`","isAnswer":true},
                    {"text":"a Promise object that resolves with `[\"js\", \"node\", \"react\"]`","isAnswer":false}
                ],
                "content":"Assume `fetchTags()` returns a Promise that will eventually resolve with `[\"js\", \"node\", \"react\"]`.\n\nWhen all promises resolve, what will be the final value of `result`?\n\n",
                "code_snippet": "\nvar result = fetchTags()\n  .then(function(tags) { \n\n return tags.map(toUpperCase)\n  })\n\nfunction toUpperCase (str) { return str.toUpperCase() }\n",
                "index":2,
                "isCorrect":false,
                "answer": {
                    "expected":[3], "actual":[]}
            },
            
            {
                "id":4,
                "choices":[
                    {"text":"`[\"JS\", \"NODE\", \"REACT\"]`","isAnswer":true},
                    {"text":"`[\"js\", \"node\", \"react\"]`","isAnswer":false},
                    {"text":"`null`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"JS\", \"NODE\", \"REACT\"]`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"js\", \"node\", \"react\"]`","isAnswer":false}
                ],
                "content":"Assume `fetchTags()` returns a Promise that will eventually resolve with `['js', 'node', 'REACT']`.\n\nWhen all promises resolve, what will be the final value of `result`?\n\n\n",
                "code_snippet": "\nvar result = null;\nfetchTags()\n  .then(function(tags) {\n    return tags.map(toUpperCase);\n  })\n  .then(function(tags) {\n    result = tags\n  })\n\nfunction toUpperCase (str) { return str.toUpperCase() }\n",
                "index":3,
                "isCorrect":false,
                "answer":{
                    "expected":[0], "actual":[]}
            },
            
            {
                "id":5,
                "choices":[
                    {"text":"`[\"JS\", \"NODE\", \"REACT\"]`","isAnswer":false},
                    {"text":"`[\"js\", \"node\", \"REACT\"]`","isAnswer":false},
                    {"text":"`null`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"js\", \"node\", \"react\"]`","isAnswer":true},
                    {"text":"a Promise object that resolves with `[\"JS\", \"NODE\", \"REACT\"]`","isAnswer":false}
                ],
                "content":"Assume `fetchTags()` returns a Promise that eventually will resolve with `[\"js\", \"node\", \"REACT\"]`.\n\nWhen all promises resolve, what will be the final value of `result`?\n\n",
                "code_snippet": "\nvar result = fetchTags()\n\nresult.then(function(tags) {\n  return tags.map(toUpperCase)\n})\n\nfunction toUpperCase (str) { return str.toUpperCase() }\n",
                "index":4,
                "isCorrect":false,
                "answer":{
                    "expected":[3], "actual":[]}
            },
            
            {
                "id":6,
                "choices":[
                    {"text":"`[10,20,30]`","isAnswer":false},
                    {"text":"`{ name: \"Alice\" }`","isAnswer":false},
                    {"text":"A promise that resolves with `[10,20,30]`","isAnswer":false},
                    {"text":"A promise that resolves with `{ name: \"Alice\" }`","isAnswer":true},
                    {"text":"A promise that resolves with (a promise that resolves with `{ name: \"Alice\" }`)","isAnswer":false}
                ],
                "content":"Assume the following:\n\n- `fetchIds()` returns a Promise that eventually resolves with `[10,20,30]`\n- `fetchUser(10)` returns a Promise that eventually resolves with `{ name: \"Alice\" }`\n\nWhen all promises resolve, what will be the final value of `result`?\n\n",
                "code_snippet": "\nvar result = fetchIds()\n  .then(function(ids) {\n    return fetchUser( ids[0] )\n  })\n",
                "index":5,
                "isCorrect":false,
                "answer":{
                    "expected":[3], "actual":[]}
            },
            
            {
                "id":7,
                "choices":[
                    {"text":"`[10,20,30]`","isAnswer":false},
                    {"text":"`{ name: \"Alice\" }`","isAnswer":false},
                    {"text":"A promise that resolves with `[10,20,30]`","isAnswer":false},
                    {"text":"A promise that resolves with `{ name: \"Alice\" }`","isAnswer":true},
                    {"text":"A promise that resolves with (a promise that resolves with { name: \"Alice\" })","isAnswer":false}
                ],
                "content":"Assume the following:\n\n- `fetchIds()` returns a Promise that eventually resolves with `[10,20,30]`\n- `fetchUser(10)` returns a Promise that eventually resolves with `{ name: \"Alice\" }`\n\nWhen all promises resolve, what will be the final value of `result`?\n\n\n",
                "code_snippet": "\nvar result = fetchIds()\n  .then(function(ids) {\n    return fetchUser( ids[0] )\n  })\n  .then(function(value) {\n    return value\n  })\n",
                "index":6,
                "isCorrect":false,
                "answer":{
                    "expected":[3], "actual":[]}
            }
        ] 
    },
    
    {   "id": "665",
        "name": "JavaScript Scope",
        "questionCount":10,
        "difficulty": 5,
        "questions": [
            {
                "id":1,
                "choices": [
                    {"text":"10","isAnswer":false},
                    {"text":"20","isAnswer":false},
                    {"text":"30","isAnswer":true},
                    {"text":"40","isAnswer":false},
                    {"text":"50","isAnswer":false}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n",
                "code_snippet": "\nvar x = 30;\n\nfunction get () { return x; }\n\nvar result = get(20);\n",
                "index":0,
                "isCorrect":false,
                "answer": 
                    {"expected":[2], "actual":[]}
            },

            { 
                "id":2,
                "choices": [
                    {"text":"10", "isAnswer":false},
                    {"text":"20", "isAnswer":true},
                    {"text":"30", "isAnswer":false},
                    {"text":"40", "isAnswer":false},
                    {"text":"50", "isAnswer":false}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n",
                "code_snippet": "\nvar x = 30;\n\nfunction get (x) { return x; }\n\nvar result = get(20);\n",
                "index":1,
                "isCorrect":false,
                "answer": {
                    "expected":[1],"actual":[]}
            },
            {
                "id":3,
                "choices":[
                    {"text":"10", "isAnswer":false},
                    {"text":"20", "isAnswer":false},
                    {"text":"30", "isAnswer":true},
                    {"text":"40", "isAnswer":false},
                    {"text":"50", "isAnswer":false}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n",
                "code_snippet": "\nvar x = 30;\n\nfunction get () { return x; }\nfunction set (value) { var x = value; }\n\nset(10);\nvar result = get(20);\n",
                "index":2,
                "isCorrect":false,
                "answer": {
                    "expected":[2], "actual":[]}
            },
            
            {
                "id":4,
                "choices":[
                    {"text":"10","isAnswer":true},
                    {"text":"20","isAnswer":false},
                    {"text":"30","isAnswer":false},
                    {"text":"40","isAnswer":false},
                    {"text":"50","isAnswer":false}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n",
                "code_snippet": "\nvar x = 30;\n\nfunction get () { return x; }\nfunction set (value) { x = value; }\n\nset(10);\nvar result = get(20);\n",
                "index":3,
                "isCorrect":false,
                "answer":{
                    "expected":[0], "actual":[]}
            },
            
            {
                "id":5,
                "choices":[
                    {"text":"10","isAnswer":false},
                    {"text":"20","isAnswer":true},
                    {"text":"30","isAnswer":false},
                    {"text":"40","isAnswer":false},
                    {"text":"50","isAnswer":false}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n",
                "code_snippet": "\nvar x = 30;\n\nfunction get (x) { return x; }\nfunction set (value) { x = value; }\n\nset(10);\nvar result = get(20);\n",
                "index":4,
                "isCorrect":false,
                "answer":{
                    "expected":[1], "actual":[]}
            },
            
            {
                "id":6,
                "choices":[
                    {"text":"5","isAnswer":false},
                    {"text":"10","isAnswer":false},
                    {"text":"20","isAnswer":false},
                    {"text":"25","isAnswer":false},
                    {"text":"30","isAnswer":true}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n",
                "code_snippet": "\nvar x = 10;\n\nfunction add (y) {\n  return x + y;\n}\n\nfunction strangeAdd (x) {\n  return add(x) + add(x);\n}\n\nvar result = strangeAdd(5);\n",
                "index":5,
                "isCorrect":false,
                "answer":{
                    "expected":[5], "actual":[]}
            },
            
            {
                "id":7,
                "choices":[
                    {"text":"10","isAnswer":false},
                    {"text":"15","isAnswer":false},
                    {"text":"20","isAnswer":true},
                    {"text":"25","isAnswer":false},
                    {"text":"30","isAnswer":false}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n",
                "code_snippet": "\nvar x = 10;\n\nfunction outer () {\n  var x = 20;\n  function inner () {\n    return x;\n  }\n  return inner();\n}\n\nvar result = outer();\n",
                "index":6,
                "isCorrect":false,
                "answer":{
                    "expected":[2], "actual":[]}
            },
            
            {
                "id":8,
                "choices":[
                    {"text":"10","isAnswer":true},
                    {"text":"20","isAnswer":false},
                    {"text":"30","isAnswer":false},
                    {"text":"40","isAnswer":false},
                    {"text":"45","isAnswer":false}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n",
                "code_snippet": "\nvar x = 10;\n\nfunction outer () {\n  var x = 20;\n  function inner () {\n    x = x + 10;\n    return x;\n  }\n  inner();\n}\n\nouter();\n\nvar result = x;\n",
                "index":7,
                "isCorrect":false,
                "answer":{
                    "expected":[0], "actual":[]}
            },
            
            {
                "id":9,
                "choices":[
                    {"text":"10","isAnswer":false},
                    {"text":"20","isAnswer":true},
                    {"text":"25","isAnswer":false},
                    {"text":"30","isAnswer":false},
                    {"text":"40","isAnswer":false}

                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n",
                "code_snippet": "\nvar x = 10;\n\nfunction outer () {\n  x = 20;\n  function inner () {\n    var x = x + 20;\n    return x;\n  }\n  inner();\n}\n\nouter();\n\nvar result = x;\n",
                "index":8,
                "isCorrect":false,
                "answer":{
                    "expected":[1],"actual":[]}
            },
            
            {
                "id":10,
                "choices":[
                    {"text":"10","isAnswer":false},
                    {"text":"20","isAnswer":false},
                    {"text":"30","isAnswer":false},
                    {"text":"40","isAnswer":true},
                    {"text":"50","isAnswer":false}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n",
                "code_snippet": "\nvar x = 10;\n\nfunction outer () {\n  x = 20;\n  function inner () {\n    x = x + 20;\n  }\n  inner();\n}\n\nouter();\n\nvar result = x;\n",
                "index":9,
                "isCorrect":false,
                "answer":{
                  "expected":[3],"actual":[]}
            }
        ]
    },
    
    {   "id": "266",
        "name": "JavaScript Function Binding",
        "questionCount":9,
        "difficulty": 3,
        "questions": [
            {
                "id":1,
                "choices": [
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Window says hi`, immediately","isAnswer":false},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":true},
                    {"text":"`Alice says hi`, immediately","isAnswer":false},
                    {"text":"`Bob says hi`, after 1 second","isAnswer":false}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n",
                "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(function() {\n  alice.sayHi();\n}, 1000);\n",
                "index":0,
                "isCorrect":false,
                "answer": 
                    {"expected":[2], "actual":[]}
            },

            { 
                "id":2,
                "choices": [
                    {"text":"`Window says hi`, after 1 second","isAnswer":true},
                    {"text":"`Window says hi`, immediately","isAnswer":false},
                    {"text":"`Bob says hi`, after 1 second","isAnswer":false},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":false},
                    {"text":"`Alice says hi`, immediately","isAnswer":false}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n",
                "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi, 1000);\n",
                "index":1,
                "isCorrect":false,
                "answer": {
                    "expected":[0],"actual":[]}
            },
            {
                "id":3,
                "choices":[
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":true},
                    {"text":"`Alice says hi`, immediately","isAnswer":false},
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Bob says hi`, immediately","isAnswer":false}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n",
                "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi.bind(alice), 1000);\n",
                "index":2,
                "isCorrect":false,
                "answer": {
                    "expected":[1], "actual":[]}
            },
            
            {
                "id":4,
                "choices":[
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Window says hi`, immediately","isAnswer":false},
                    {"text":"`Alice says hi`, immediately","isAnswer":true},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":false},
                    {"text":"`Bob says hi`, immediately","isAnswer":false}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n",
                "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi(), 1000);\n",
                "index":3,
                "isCorrect":false,
                "answer":{
                    "expected":[2], "actual":[]}
            },
            
            {
                "id":5,
                "choices":[
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Window says hi`, immediately","isAnswer":false},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":false},
                    {"text":"`Alice says hi`, immediately","isAnswer":false},
                    {"text":"`Bob says hi`, after 1 second","isAnswer":true}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n",
                "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi.bind(bob), 1000);\n",
                "index":4,
                "isCorrect":false,
                "answer":{
                    "expected":[4], "actual":[]}
            },
            
            {
                "id":6,
                "choices":[
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Window says hi`, immediately","isAnswer":false},
                    {"text":"`Alice says hi`, immediately","isAnswer":false},
                    {"text":"`Bob says hi`, after 1 second","isAnswer":false},
                    {"text":"`Bob says hi`, immediately","isAnswer":true}
            
                ],
                "content":"What message will eventually be alerted? After how long?\n\n",
                "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi.call(bob), 1000);\n",
                "index":5,
                "isCorrect":false,
                "answer":{
                    "expected":[4], "actual":[]}
            },
            
            {
                "id":7,
                "choices":[
                    {"text":"`Window says hi`, after 1 second","isAnswer":true},
                    {"text":"`Window says hi`, immediately","isAnswer":false},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":false},
                    {"text":"`Bob says hi`, after 1 second","isAnswer":false},
                    {"text":"`Bob says hi`, immediately","isAnswer":false}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n",
                "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nbob.sayHi = alice.sayHi\n\nsetTimeout(bob.sayHi, 1000);\n",
                "index":6,
                "isCorrect":false,
                "answer":{
                    "expected":[0], "actual":[]}
            },
            
            {
                "id":8,
                "choices":[
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Window says hi`, immediately","isAnswer":false},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":false},
                    {"text":"`Alice says hi`, immediately","isAnswer":false},
                    {"text":"`Bob says hi`, after 1 second","isAnswer":true}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n",
                "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nvar sayHi = alice.sayHi.bind(bob)\n\nsetTimeout(function () {\n  window.sayHi()\n}, 1000);\n",
                "index":7,
                "isCorrect":false,
                "answer":{
                    "expected":[4], "actual":[]}
            },
            
            {
                "id":9,
                "choices":[
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":false},
                    {"text":"`Alice says hi`, immediately","isAnswer":true},
                    {"text":"`Bob says hi`, after 1 second","isAnswer":false},
                    {"text":"`Bob says hi`, immediately","isAnswer":false}                
                ],
                "content":"What message will eventually be alerted? After how long?\n\n",
                "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\n\nalice.sayHi.bind(bob);\n\nsetTimeout(alice.sayHi(), 1000);\n",
                "index":8,
                "isCorrect":false,
                "answer":{
                    "expected":[2], "actual":[]}
            }
        ]
    },

    {   "id": "69",
        "name": "Important Terms",
        "questionCount":9,
        "difficulty": 5,
        "questions": [
            {
                "id":1,
                "choices": [
                    {"text":"George","isAnswer":false},
                    {"text":"Peanut","isAnswer":false},
                    {"text":"Captain","isAnswer":true},
                    {"text":"Golum","isAnswer":false},
                    {"text":"None exists","isAnswer":false}
                ],
                "content":"What is Grace's cat's name?",
                // "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(function() {\n  alice.sayHi();\n}, 1000);\n",
                "index":0,
                "isCorrect":false,
                "answer": 
                    {"expected":[2], "actual":[]}
            },

            { 
                "id":2,
                "choices": [
                    {"text":"Indian","isAnswer":true},
                    {"text":"Basghetti","isAnswer":false},
                    {"text":"Salad","isAnswer":false},
                    {"text":"Nothing. She cooks nothing.","isAnswer":false},
                    {"text":"Hot Pockets","isAnswer":false}
                ],
                "content":"What is Grace's favorite food to cook?",
                // "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi, 1000);\n",
                "index":1,
                "isCorrect":false,
                "answer": {
                    "expected":[0],"actual":[]}
            },
            {
                "id":3,
                "choices":[
                    {"text":"3503 Speedway","isAnswer":false},
                    {"text":"2662 Nonyabidniss Rd.","isAnswer":true},
                    {"text":"106 E. 30th St.","isAnswer":false},
                    {"text":"Zilker Park","isAnswer":false},
                    {"text":"Dumpster out back","isAnswer":false}
                ],
                "content":"Where does Grace live?",
                // "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi.bind(alice), 1000);\n",
                "index":2,
                "isCorrect":false,
                "answer": {
                    "expected":[1], "actual":[]}
            },
            
            {
                "id":4,
                "choices":[
                    {"text":"Anything in Texas","isAnswer":false},
                    {"text":"Medium-hot and muggy","isAnswer":false},
                    {"text":"Max 50F and dry","isAnswer":true},
                    {"text":"No opinion","isAnswer":false},
                    {"text":"Alaska in the summer","isAnswer":false}
                ],
                "content":"What's Grace's favorite weather?",
                // "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi(), 1000);\n",
                "index":3,
                "isCorrect":false,
                "answer":{
                    "expected":[2], "actual":[]}
            },
            
            {
                "id":5,
                "choices":[
                    {"text":"Bees","isAnswer":false},
                    {"text":"Red food coloring","isAnswer":false},
                    {"text":"Uncooked eggs","isAnswer":false},
                    {"text":"Parsley","isAnswer":false},
                    {"text":"Black Pepper","isAnswer":true}
                ],
                "content":"What is Grace most allergic to?",
                // "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi.bind(bob), 1000);\n",
                "index":4,
                "isCorrect":false,
                "answer":{
                    "expected":[4], "actual":[]}
            },
            
            {
                "id":6,
                "choices":[
                    {"text":"Going to prom","isAnswer":false},
                    {"text":"Sleeping all day","isAnswer":false},
                    {"text":"Weekend trip to Atlanta","isAnswer":false},
                    {"text":"Finally going back to Big Bend","isAnswer":false},
                    {"text":"A 180 mile bike ride","isAnswer":true}
            
                ],
                "content":"What is Grace doing on 20-21 October?",
                // "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi.call(bob), 1000);\n",
                "index":5,
                "isCorrect":false,
                "answer":{
                    "expected":[4], "actual":[]}
            },
            
            {
                "id":7,
                "choices":[
                    {"text":"3 rods, 23 screws, 1 plate, and 7 pins","isAnswer":true},
                    {"text":"None, she's never broken anything","isAnswer":false},
                    {"text":"1 rod and 4 screws","isAnswer":false},
                    {"text":"6 poles and a metal rope","isAnswer":false},
                    {"text":"4 pins, 7 rods, and 3 plates","isAnswer":false}
                ],
                "content":"How much metal does Grace have inside her?",
                // "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nbob.sayHi = alice.sayHi\n\nsetTimeout(bob.sayHi, 1000);\n",
                "index":6,
                "isCorrect":false,
                "answer":{
                    "expected":[0], "actual":[]}
            },
            
            {
                "id":8,
                "choices":[
                    {"text":"Shady made me","isAnswer":false},
                    {"text":"She's passionate about quizzes","isAnswer":false},
                    {"text":"Her mom asked her to","isAnswer":false},
                    {"text":"A friend suggested that it'd be cool","isAnswer":false},
                    {"text":"She needed lots of review on Q1 topics","isAnswer":true}
                ],
                "content":"Why did Grace choose this as a project?",
                // "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nvar sayHi = alice.sayHi.bind(bob)\n\nsetTimeout(function () {\n  window.sayHi()\n}, 1000);\n",
                "index":7,
                "isCorrect":false,
                "answer":{
                    "expected":[4], "actual":[]}
            },
            
            {
                "id":9,
                "choices":[
                    {"text":"Somewhat, yes","isAnswer":false},
                    {"text":"Absolutely, so much","isAnswer":false},
                    {"text":"How about no, Scott?","isAnswer":true},
                    {"text":"Ask again in 3 weeks","isAnswer":false},
                    {"text":"Favorite thing ever","isAnswer":false}                
                ],
                "content":"Did Grace enjoy this project?",
                // "code_snippet": "\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\n\nalice.sayHi.bind(bob);\n\nsetTimeout(alice.sayHi(), 1000);\n",
                "index":8,
                "isCorrect":false,
                "answer":{
                    "expected":[2], "actual":[]}
            }
        ]
    }

]
module.exports = questions;