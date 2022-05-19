const React = require('react')
const Def = require('../default')
function NewForm() {
    return (
        <Def>
            <main>
                <h1>Add New Place</h1>
                <form method="Post" action="/places">
                    <div className='form-group'>
                        <label htmlFor="name">Place Name</label>
                        <input className='form-control' type="text" id='name' name='name' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="pic">Place Picture</label>
                        <input className='form-control' type="url" id='pic' name='pic' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="city">City</label>
                        <input className='form-control' type="text" id='city' name='city' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <input className='form-control' type="text" id='state' name='state' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className='form-control' type="text" id='cuisines' name='cuisines' />
                    </div>
                    <button>Add Place</button>
                </form>
            </main>
        </Def>
    )
}
module.exports = NewForm