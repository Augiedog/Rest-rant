const React = require('react')
const Def = require('../default')

function Show(data) {
    return (
        <Def>
            <main>
                <h1>{ data.place.name } </h1>
                <p>Currently unrated</p>
                <form method='POST' action={`/places/${data.id}?_method=DELETE` }></form>
            </main>
        </Def>
    )
}
module.exports = Show
