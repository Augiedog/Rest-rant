const React = require('react')
function Def (html) {
    return (
        <html>
            <head>
                <title>The Title is here</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}
module.exports = Def