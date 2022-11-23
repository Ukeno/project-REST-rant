// Import React and the function in default.jsx
const React = require('react')
const Def = require('./default')
// Home stub function export| wrap the Def component | stub home page
function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
          </main>
      </Def>
    )
  }
  
module.exports = home
