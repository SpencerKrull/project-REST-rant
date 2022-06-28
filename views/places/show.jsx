const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = sumRatings / data.place.comments.length
        rating = (
            <h3>
                {Math.round(averageRating)} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! >:(' : 'Rave! :-)'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row border-top">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                </div>
                <div className="col-sm-6 justify-content-right mt-5 border-top">
                    <h2>Description</h2>
                    <h3>{data.place.showEstablished()}</h3>
                    <h4>Serving {data.place.cuisines}</h4>
                </div>
                <hr />
                <h2>Comments</h2>
                {comments}

                <h2>Rating</h2>
                {rating}
                <br />

                <form method='POST' action={`/places/${data.place.id}/comment`}>
                  <div className='form-group'>
                    <label htmlFor='author'>Author</label>
                    <input className='form-control' id='author' name='author'/>
                  </div>

                  <div className='form-group'>
                    <label htmlFor='content'>Content</label>
                    <input className='form-control' id='content' name='content' type='textarea' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='stars'>Star Rating</label>
                    <input className='form-control' id='stars' name='stars' type='range' step='0.5' min='0' max='5' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='rant'>Rant</label>
                    <input  id='rant' name='rant' type='checkbox' defaultChecked/>
                  </div>

                  <input className='btn btn-primary' type='submit' value='Add Comment' />
                </form>
                <h2>Currently Unrated</h2>
            </main>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> Edit</a>     

            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">Delete</button>
            </form> 
        </Def>
    )
}

module.exports = show
