// import React and the Def function from default.jsx
const React = require('react')
const Def = require('./default')
// stub function export | Def component from default.jsx file wrapper
function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
        </Def>
    )
}

module.exports = error404