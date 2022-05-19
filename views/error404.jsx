const React = require('react')
const Def = require('./default')
function error404() {
    return (
        <Def>
            <main>
                <img src='https://http.cat/404' alt='404 page'></img>    
            </main>
        </Def>
    )
}
module.exports = error404