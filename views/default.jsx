// Import React
const React = require('react')
// Stub function called Def and return statement
function Def(html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}
// Export Def function
module.exports = Def