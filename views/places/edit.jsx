const React = require('react')
const places = require('../../models/places.js')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className="row">
                    <div className='form-group col-sm-6'>  
                        <label htmlFor="name">Place Name</label>
                        <input 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value={data.place.name} 
                        required />
                        <label htmlFor="Image">Image</label>
                        <input 
                            type="text"
                            name='image'
                            id='image'
                        defaultValue={data.place.pic} />
                        <label htmlFor="city">City</label>
                        <input 
                            type="text"
                            name='city'
                            id='city'
                        defaultValue={data.place.city} />
                        <label htmlFor="State">State</label>
                        <input type="text" name="state" id="state"
                        defaultValue={data.place.state} />
                        <label htmlFor="cuisines">Cuisines</label>
                        <input type="text" name='cuisines' id='cuisines'
                        defaultValue={data.place.cuisines} />
                    </div>
                    <input type="submit" />
                </div>
            </form>         
        </Def>
    )
}

module.exports = edit_form
