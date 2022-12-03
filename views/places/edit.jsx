const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
            <div className="row">
                <div className="form-group col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="=state">State</label>
                    <input className="form-control"id="state"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="cusines">Cusines</label>
                    <input className="form-control" id="cusines"/>
                </div></div>
                <input className="btn btn-primary" type="submit" value="Submit Changes" />
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form