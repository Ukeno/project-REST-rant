// import React and the Def function from default.jsx
const React = require('react')
const Def = require('./default')
// stub function export | Def component from default.jsx file wrapper
function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div className="text-center">
                    <p>Oops, sorry, we can't find this page!</p>
                    <img src="/images/error.jpg" alt="error" />
                    <div>
                        Photo by <a href="https://unsplash.com/@lazycreekimages?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                        Michael Dziedzic</a> on <a href="https://unsplash.com/s/photos/error?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404