const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/404page.webp" alt="Disappointed Man" />
                    <div>
                        Photo from <a href="https://www.indiatoday.in/trending-news/story/remember-the-disappointed-pak-fan-meme-guy-he-is-a-manager-at-a-popular-mnc-1816359-2021-06-18">India Today</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404