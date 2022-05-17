const React = require('react')
const Def = require('./default')
function error404 () {
    return (
        <Def>
            <main>
                <img src='https://http.cat/404' alt='404 page'></img>    
            </main>
            {/* <main style="margin: 0px; background: #0e0e0e; height: 100%">
                <img style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;" src="https://http.cat/404"></img>
            </main> */}
        </Def>
    )
}
module.exports = error404