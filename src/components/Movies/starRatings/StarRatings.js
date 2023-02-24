import { Rating } from 'react-simple-star-rating'

function MoviesRating({vote_average}) {

    let vote = Math.round(vote_average/2);

    return (
        <div className='App'>
            <Rating initialValue={vote} />
        </div>
    )
}
export {
    MoviesRating
}