// import React and the Def function from default.jsx
const React = require('react')
const Def = require('../default')
// stub function export | Def component from default.jsx file wrapper

function index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div key={index} className="col-sm-6">
                <h2>
                    <a href={`/places/${place.id}`}>
                        {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} />
                <p className="text-center">
                    Location in {place.city}, {place.state}
                </p>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index