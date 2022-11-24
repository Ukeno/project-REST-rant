// Import React and the function in default.jsx
const React = require('react')
const Def = require('./default')
// Home stub function export| Def component from default.jsx file 
function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  )
}

module.exports = home
