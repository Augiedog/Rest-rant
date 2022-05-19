const React = require('react')
function Def(html) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <title>The Title is here</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body className='container'>
                {html.children}
            </body>
        </html>
    )
}
module.exports = Def