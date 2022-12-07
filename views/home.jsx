// Import React and the function in default.jsx
const React = require('react')
const Def = require('./default')
// Home stub function export| wrap the Def component | stub home page
function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>
        <div className="row">
          <img src="/images/kayleigh-harrington.jpg" alt="Lounge" className="round mx-auto d-block" />
        </div>
        <div className="author">
          Photo by <a href="https://unsplash.com/@kayleighharrington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            kayleigh harrington</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
        <a href="/places">
          <br />
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home
