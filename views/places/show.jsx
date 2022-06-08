const React = require('react')
const Def = require('../default')

// Here is the new problem
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
                <a href={`/places/${data.id}/edit`}><button className='btn btn-info'>Edit</button></a>
                <form method='POST' action={`/places/${data._id}?_method=DELETE`}>
                    <input className='btn btn-danger' type="submit" value="DELETE" />
                </form>
            </main>
        </Def>
    )
}
module.exports = Show
