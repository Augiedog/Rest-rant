const React = require('react')
const Def = require('./default')
function Home () {
    return (
        <Def>
            <main>
                <h1>H1 on Home page</h1>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}
module.exports = Home