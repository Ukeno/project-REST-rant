const React = require('react')
const Def = require('../default')

function show(data) {
  return (
    <Def>
      <main>
        <h1>Show</h1>
        <div className="row">
          <div className="col-sm-8">    {/* 8 */}
            {data.place.cuisines}
            <br />
            <img src={data.place.pic} alt={data.place.name} />
            <br />
            Location in {data.place.city}, {data.place.state}
          </div>
          <div className="col-sm-13"> {/* 14 */}
            <h1>{data.place.name}</h1>
            <h4>currently unrated</h4>
            <br />
            <br />
            <div className="col-sm-12"> {/* 20 */}
              <h4>no comments yet!</h4>
            </div>
          </div>
          <div className="col-sm-12"> {/* 12 */}
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
            <form method="POST" action={`/places/${data.id}?_method=DELETE`} >
              <br />
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
            <br />
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = show
