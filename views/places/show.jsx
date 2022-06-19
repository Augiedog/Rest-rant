const React = require('react')
const Def = require('../default')

function Show( data ) {
    const dplace = data.places
    return (
        <Def title={dplace.name}>
            <main className='row'>
                <div className='col-md'><img src={dplace.pic} alt={dplace.name}></img></div>
                <h1>{ dplace.name } </h1>
                <div className='col-sm'>
                    <h2>Rating</h2>
                    <p>Currently Unrated</p>
                    <h2>Description</h2>
                    <p>Located in {dplace.city}, {dplace.state} and serves {dplace.cuisines}</p>
                </div>
                <div>
                   <h2>Comments</h2> 
                </div>
                <a href={`/places/${dplace._id}/edit`}><button className='btn btn-info'>Edit</button></a>
                <form method='POST' action={`/places/${dplace._id}?_method=DELETE`}>
                    <input className='btn btn-danger' type="submit" value="DELETE" />
                </form>
            </main>
        </Def>
    )
}
module.exports = Show
