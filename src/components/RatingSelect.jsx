import {useContext, useEffect, useState} from 'react'
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect( { select } ) {
    const [selected, setSelected] =useState(10)
    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setSelected(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleChange = (e) => {
        setSelected(+e.currentTarget.value)
        select(+e.currentTarget.value)
    };

    let element = [];

    for(let i = 1; i <= 10; i++){
        element.push(
            <li key={i}>
                <input type="radio" id={`num${i}`} name="rating" value={`${i}`} checked={selected === i} onChange={handleChange}/>
                <label htmlFor={`num${i}`}>{i}</label>
            </li>
        )
    }

    return (
        <ul className='rating'>
            {element}
        </ul>
    )
}

export default RatingSelect