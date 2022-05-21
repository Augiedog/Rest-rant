const React = require('react')
const Def = require('../default')

function Show(data) {
    return (
        <Def>
            <main className='row'>
                <div className='col-md'><img src={data.place.pic} alt={data.place.name}></img></div>
                <h1>{ data.place.name } </h1>
                <div className='col-sm'>
                    <h2>Rating</h2>
                    <p>Currently Unrated</p>
                    <h2>Description</h2>
                    <p>Located in {data.place.city}, {data.place.state} and serves {data.place.cuisines}</p>
                </div>
                <div>
                   <h2>Comments</h2> 
                </div>
                <form method='POST' action={`/places/${data.id}?_method=DELETE` }></form>
            </main>
        </Def>
    )
}
module.exports = Show
