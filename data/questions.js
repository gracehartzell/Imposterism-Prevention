const questions =[
    {   "id": "666",
        "name": "Javascript Promises",
        "questionCount":10,
        "difficulty": 5,
        "questions": [
            {
                "id":1,
                "choices": [
                    {"text":"`[\"JS\", \"NODE\", \"MITHRIL\"]`","isAnswer":false},
                    {"text":"`[\"js\", \"node\", \"mithril\"]`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"JS\", \"NODE\", \"MITHRIL\"]`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"js\", \"node\", \"mithril\"]`","isAnswer":true},
                    {"text":"a Promise object that resolves with `null`","isAnswer":false}
                ],
                "content":"Assume `fetchTags()` returns a Promise that will eventually resolve with `[\"js\", \"node\", \"mithril\"]`.\n\nWhen all promises resolve, what will be the final value of `result`?\n\n",
                "code_snippet": "\nvar result = fetchTags()\n  .then(function(tags) {\n    return tags\n  })\n",
                "index":0,
                "isCorrect":false,
                "answer": 
                    {"expected":[4], "actual":[]}
            },

            { 
                "id":2,
                "choices": [
                    {"text":"`[\"JS\", \"NODE\", \"MITHRIL\"]`","isAnswer":false},
                    {"text":"`[\"js\", \"node\", \"mithril\"]`","isAnswer":false},
                    {"text":"`null`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"JS\", \"NODE\", \"MITHRIL\"]`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"js\", \"node\", \"mithril\"]`","isAnswer":true}
                ],
                "content":"Assume `fetchTags()` returns a Promise that will eventually resolve with `[\"js\", \"node\", \"mithril\"]`.\n\nWhen all promises resolve, what will be the final value of `result`?\n\n    var result = fetchTags();",
                "index":1,
                "isCorrect":false,
                "answer": {
                    "expected":[4],"actual":[]}
            },
            {
                "id":3,
                "choices":[
                    {"text":"`[\"JS\", \"NODE\", \"MITHRIL\"]`","isAnswer":false},
                    {"text":"`[\"js\", \"node\", \"mithril\"]`","isAnswer":false},
                    {"text":"`null`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"JS\", \"NODE\", \"MITHRIL\"]`","isAnswer":true},
                    {"text":"a Promise object that resolves with `[\"js\", \"node\", \"mithril\"]`","isAnswer":false}
                ],
                "content":"Assume `fetchTags()` returns a Promise that will eventually resolve with `[\"js\", \"node\", \"mithril\"]`.\n\nWhen all promises resolve, what will be the final value of `result`?\n\n```javascript\nvar result = fetchTags()\n  .then(function(tags) {\n    return tags.map(toUpperCase)\n  })\n\nfunction toUpperCase (str) { return str.toUpperCase() }\n```",
                "index":2,
                "isCorrect":false,
                "answer": {
                    "expected":[3], "actual":[]}
            },
            
            {
                "id":4,
                "choices":[
                    {"text":"`[\"JS\", \"NODE\", \"MITHRIL\"]`","isAnswer":true},
                    {"text":"`[\"js\", \"node\", \"mithril\"]`","isAnswer":false},
                    {"text":"`null`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"JS\", \"NODE\", \"MITHRIL\"]`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"js\", \"node\", \"mithril\"]`","isAnswer":false}
                ],
                "content":"Assume `fetchTags()` returns a Promise that will eventually resolve with `['js', 'node', 'mithril']`.\n\nWhen all promises resolve, what will be the final value of `result`?\n\n```javascript\nvar result = null;\nfetchTags()\n  .then(function(tags) {\n    return tags.map(toUpperCase);\n  })\n  .then(function(tags) {\n    result = tags\n  })\n\nfunction toUpperCase (str) { return str.toUpperCase() }\n```\n",
                "index":3,
                "isCorrect":false,
                "answer":{
                    "expected":[0], "actual":[]}
            },
            
            {
                "id":5,
                "choices":[
                    {"text":"`[\"JS\", \"NODE\", \"MITHRIL\"]`","isAnswer":false},
                    {"text":"`[\"js\", \"node\", \"mithril\"]`","isAnswer":false},
                    {"text":"`null`","isAnswer":false},
                    {"text":"a Promise object that resolves with `[\"js\", \"node\", \"mithril\"]`","isAnswer":true},
                    {"text":"a Promise object that resolves with `[\"JS\", \"NODE\", \"MITHRIL\"]`","isAnswer":false}
                ],
                "content":"Assume `fetchTags()` returns a Promise that eventually will resolve with `[\"js\", \"node\", \"mithril\"]`.\n\nWhen all promises resolve, what will be the final value of `result`?\n\n```javascript\nvar result = fetchTags()\n\nresult.then(function(tags) {\n  return tags.map(toUpperCase)\n})\n\nfunction toUpperCase (str) { return str.toUpperCase() }\n```",
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
                "content":"Assume the following:\n\n- `fetchIds()` returns a Promise that eventually resolves with `[10,20,30]`\n- `fetchUser(10)` returns a Promise that eventually resolves with `{ name: \"Alice\" }`\n\nWhen all promises resolve, what will be the final value of `result`?\n\n```javascript\nvar result = fetchIds()\n  .then(function(ids) {\n    return fetchUser( ids[0] )\n  })\n```",
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
                "content":"Assume the following:\n\n- `fetchIds()` returns a Promise that eventually resolves with `[10,20,30]`\n- `fetchUser(10)` returns a Promise that eventually resolves with `{ name: \"Alice\" }`\n\nWhen all promises resolve, what will be the final value of `result`?\n\n```javascript\nvar result = fetchIds()\n  .then(function(ids) {\n    return fetchUser( ids[0] )\n  })\n  .then(function(value) {\n    return value\n  })\n```\n",
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
                "content":"After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 30;\n\nfunction get () { return x; }\n\nvar result = get(20);\n```",
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
                "content":"After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 30;\n\nfunction get (x) { return x; }\n\nvar result = get(20);\n```",
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
                "content":"After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 30;\n\nfunction get () { return x; }\nfunction set (value) { var x = value; }\n\nset(10);\nvar result = get(20);\n```",
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
                "content":"After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 30;\n\nfunction get () { return x; }\nfunction set (value) { x = value; }\n\nset(10);\nvar result = get(20);\n```",
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
                "content":"After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 30;\n\nfunction get (x) { return x; }\nfunction set (value) { x = value; }\n\nset(10);\nvar result = get(20);\n```",
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
                    {"text":"15","isAnswer":false},
                    {"text":"20","isAnswer":false},
                    {"text":"25","isAnswer":false},
                    {"text":"30","isAnswer":true}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 10;\n\nfunction add (y) {\n  return x + y;\n}\n\nfunction strangeAdd (x) {\n  return add(x) + add(x);\n}\n\nvar result = strangeAdd(5);\n```",
                "index":5,
                "isCorrect":false,
                "answer":{
                    "expected":[5], "actual":[]}
            },
            
            {
                "id":7,
                "choices":[
                    {"text":"10","isAnswer":false},
                    {"text":"20","isAnswer":true},
                    {"text":"30","isAnswer":false}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 10;\n\nfunction outer () {\n  var x = 20;\n  function inner () {\n    return x;\n  }\n  return inner();\n}\n\nvar result = outer();\n```",
                "index":6,
                "isCorrect":false,
                "answer":{
                    "expected":[1], "actual":[]}
            },
            
            {
                "id":8,
                "choices":[
                    {"text":"10","isAnswer":true},
                    {"text":"20","isAnswer":false},
                    {"text":"30","isAnswer":false},
                    {"text":"40","isAnswer":false}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 10;\n\nfunction outer () {\n  var x = 20;\n  function inner () {\n    x = x + 10;\n    return x;\n  }\n  inner();\n}\n\nouter();\n\nvar result = x;\n```",
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
                    {"text":"30","isAnswer":false},
                    {"text":"40","isAnswer":false}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 10;\n\nfunction outer () {\n  x = 20;\n  function inner () {\n    var x = x + 20;\n    return x;\n  }\n  inner();\n}\n\nouter();\n\nvar result = x;\n```",
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
                    {"text":"40","isAnswer":true}
                ],
                "content":"After the following code runs, what will be the value of `result`?\n\n```javascript\nvar x = 10;\n\nfunction outer () {\n  x = 20;\n  function inner () {\n    x = x + 20;\n  }\n  inner();\n}\n\nouter();\n\nvar result = x;\n```",
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
                "content":"What message will eventually be alerted? After how long?\n\n```javascript\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(function() {\n  alice.sayHi();\n}, 1000);\n```",
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
                "content":"What message will eventually be alerted? After how long?\n\n```javascript\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi, 1000);\n```",
                "index":1,
                "isCorrect":false,
                "answer": {
                    "expected":[0],"actual":[]}
            },
            {
                "id":3,
                "choices":[
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Window says hi`, immediately","isAnswer":false},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":true},
                    {"text":"`Alice says hi`, immediately","isAnswer":false},
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Bob says hi`, immediately","isAnswer":false}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n```javascript\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi.bind(alice), 1000);\n```",
                "index":2,
                "isCorrect":false,
                "answer": {
                    "expected":[2], "actual":[]}
            },
            
            {
                "id":4,
                "choices":[
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Window says hi`, immediately","isAnswer":false},
                    {"text":"`Alice says hi`, immediately","isAnswer":true},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":false},
                    {"text":"`Bob says hi`, immediately","isAnswer":false},
                    {"text":"`Bob says hi`, after 1 second","isAnswer":false}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n```\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi(), 1000);\n```",
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
                    {"text":"`Bob says hi`, after 1 second","isAnswer":true},
                    {"text":"`Bob says hi`, immediately","isAnswer":false}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n```\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi.bind(bob), 1000);\n```",
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
                    {"text":"`Alice says hi`, after 1 second","isAnswer":false},
                    {"text":"`Alice says hi`, immediately","isAnswer":false},
                    {"text":"`Bob says hi`, after 1 second","isAnswer":false},
                    {"text":"`Bob says hi`, immediately","isAnswer":true}
            
                ],
                "content":"What message will eventually be alerted? After how long?\n\n```\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nsetTimeout(alice.sayHi.call(bob), 1000);\n```",
                "index":5,
                "isCorrect":false,
                "answer":{
                    "expected":[5], "actual":[]}
            },
            
            {
                "id":7,
                "choices":[
                    {"text":"`Window says hi`, after 1 second","isAnswer":true},
                    {"text":"`Window says hi`, immediately","isAnswer":false},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":false},
                    {"text":"`Alice says hi`, immediately","isAnswer":false},
                    {"text":"`Bob says hi`, after 1 second","isAnswer":false},
                    {"text":"`Bob says hi`, immediately","isAnswer":false}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n```\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nbob.sayHi = alice.sayHi\n\nsetTimeout(bob.sayHi, 1000);\n```",
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
                    {"text":"`Bob says hi`, after 1 second","isAnswer":true},
                    {"text":"`Bob says hi`, immediately","isAnswer":false}
                ],
                "content":"What message will eventually be alerted? After how long?\n\n```\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\nvar sayHi = alice.sayHi.bind(bob)\n\nsetTimeout(function () {\n  window.sayHi()\n}, 1000);\n```",
                "index":7,
                "isCorrect":false,
                "answer":{
                    "expected":[4], "actual":[]}
            },
            
            {
                "id":9,
                "choices":[
                    {"text":"`Window says hi`, after 1 second","isAnswer":false},
                    {"text":"`Window says hi`, immediately","isAnswer":false},
                    {"text":"`Alice says hi`, after 1 second","isAnswer":false},
                    {"text":"`Alice says hi`, immediately","isAnswer":true},
                    {"text":"`Bob says hi`, after 1 second","isAnswer":false},
                    {"text":"`Bob says hi`, immediately","isAnswer":false}                
                ],
                "content":"What message will eventually be alerted? After how long?\n\n```\nvar name = \"Window\";\nvar alice = {\n  name: \"Alice\",\n  sayHi: function() {\n    alert(this.name + \" says hi\");\n  }\n};\nvar bob = { name: \"Bob\" };\n\n\nalice.sayHi.bind(bob);\n\nsetTimeout(alice.sayHi(), 1000);\n```",
                "index":8,
                "isCorrect":false,
                "answer":{
                    "expected":[3], "actual":[]}
            }
        ]
    }

]
module.exports = questions;