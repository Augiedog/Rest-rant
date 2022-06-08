const React = require('react')
const Def = require('../default')
function Index( data ) {
  // Having issues with this map
    const dplace = data.place
    let placesFormatted = dplace.map((place, index) => {
      return (
        <div className='col-sm-6'>
          <h2>
            <a href={`/places/${index}`}>{place.name}</a>
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