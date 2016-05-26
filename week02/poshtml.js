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
    
    
