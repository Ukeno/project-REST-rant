// Import React and the function in default.jsx
const React = require('react')
const Def = require('./default')

// Home stub function export| wrap the Def component | stub home page
function home() {
  return (
    <Def>
      <main>
        <br />
        <h1>REST-Rant</h1>
        <br />
        <div className="parent">
          <img src="/images/Tleaf.png" alt="Lounge" className=" image2" />
          <img src="/images/kayleigh-harrington.jpg" alt="Lounge" className="image1" />
        </div>
        <div className="author">
          Photo by <a href="https://unsplash.com/@kayleighharrington?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            kayleigh harrington</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
        <a href="/places">
          <br />
          <button className="btn-primary">Places Page</button>
        </a>
        <br />
      </main>
    </Def >
  )
}

module.exports = home
