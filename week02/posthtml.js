"use strict"

const PostHTML = require("posthtml")
const html =
`
<em>Hello, world!</em>

`

PostHTML([ ])
    .process(html)
    .then(result =>
    {
        console.log(result.html)
    })
    
    // notate:
    // comand line
    // 1. C:\Users\Юрий\Documents\poshtml>npm instal posthtml - подтягивает библиотеку node_modules
    // 2. C:\Users\Юрий\Documents\poshtml>node posthtml.js
    //    выводит - <em>Hello, world!</em>
    
    
