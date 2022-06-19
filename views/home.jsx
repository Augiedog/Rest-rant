const React = require('react')
const Def = require('./default')
function Home() {
    return (
        <Def title='Home'>
            <main>
                <h1>Home page</h1>
                <div>
                    <img src="/images/wienerschnitzel.jpg" alt="A famous Wiener Schnitzel made from veal escalope" />
                    <div>
                        Photo by <a href='AUTHER_LINK'>Mark König</a> on <a href='https://unsplash.com/photos/MsTOg6rhRVk'>Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className='btn-primary'>Places Page</button>
                </a>
                <a href='/places/new'>
                    <button className='btn-primary'>New Place</button>
                </a>
            </main>
        </Def>
    )
}
module.exports = Home