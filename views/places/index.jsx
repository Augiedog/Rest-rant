const React = require('react')
const Def = require('../default')
function Index( data, i ) {
    const dplace = data.place
    let placesFormatted = dplace.map((place) => {
      return (
        <div className='col-sm-6' key={i}>
          <h2>
            <a href={`/places/${place._id}`}>{place.name}</a>
          </h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}></img>
          <p className='text=center'>
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              <div className='row'> 
                {placesFormatted}
              </div>
          </main>
      </Def>
  )
  }
  
module.exports = Index