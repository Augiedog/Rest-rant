const React = require('react')
function Def(html) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <title>{html.title || 'Rest-rant'}</title>
                <link rel="stylesheet" href="/style.css" />
            </head>
            <body className='container'>
                <nav>
                    <ul className="nav nav-tabs nav-fill">
                        <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
                        <li className="nav-item"><a className="nav-link active" href="/places">Places</a></li>
                        <li className="nav-item"><a className="nav-link active" href="/places/new">Add Place</a></li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}
module.exports = Def