const React = require('react')
const Def = require('../default.jsx')

function edit_form( data ) {
    const dplace = data.places
    return (
        <Def>
            <h1>Edit {dplace.name}</h1>
            <form method="POST" action={`/places/${dplace._id}?_method=PUT`}>
                <div className="row">
                    <div className='form-group col-sm-6'>  
                        <label htmlFor="name">Place Name</label>
                        <input 
                            className="form-control" 
                            id="name" 
                            name="name" 
                            value={dplace.name} 
                        required />
                        <label htmlFor="Image">Image</label>
                        <input type="text" name='image' id='image'
                        defaultValue={dplace.pic} />
                        <label htmlFor="city">City</label>
                        <input type="text" name='city' id='city'
                        defaultValue={dplace.city} />
                        <label htmlFor="State">State</label>
                        <input type="text" name="state" id="state"
                        defaultValue={dplace.state} />
                        <label htmlFor="cuisines">Cuisines</label>
                        <input type="text" name='cuisines' id='cuisines'
                        defaultValue={dplace.cuisines} />
                    </div>
                    <input type="submit" />
                </div>
            </form>         
        </Def>
    )
}

module.exports = edit_form
