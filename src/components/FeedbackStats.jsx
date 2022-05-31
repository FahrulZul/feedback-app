import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext);

    //calculate feedback average
    let ratingAvg = feedback.reduce((acc, cur) => (
        acc + cur.rating
    ), 0) / feedback.length

    // Use below regex to get rid .0 when avg is integer
    // .replace(/[.,]0$/, '')
    ratingAvg = ratingAvg.toFixed(1);

    return (
        <div className="stats">
            <h4 className="stats_review">{feedback.length} <span>Reviews</span></h4>
            <h4 className="stats_rating">Ratings: <span>{isNaN(ratingAvg) ? 0: ratingAvg}</span></h4>
        </div>
    )
}

export default FeedbackStats