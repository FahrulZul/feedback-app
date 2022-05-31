import Card from "./shared/Card"
import {FiSend} from "react-icons/fi"
import Button from "./shared/Button"
import {useState, useContext, useEffect} from "react"
import RatingSelect from "./RatingSelect"

import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
    const [input, setInput] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('');

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setInput(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])


    const handleInputChange = ({target: {value}}) => {
        if(value === ''){
            setMessage(null)
            setBtnDisabled(true)
        }else if(value !== '' && input.trim().length <= 10){
            setMessage('Text must be at least 10 characters!')
            setBtnDisabled(true);
        }else{
            setMessage(null);
            setBtnDisabled(false)
        }
        setInput(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim().length > 10){
            const newFeedback = {
                rating,
                text: input
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback);
            }else{
                addFeedback(newFeedback);
            }
        }

    }

    return (
        <Card customClass="form_card">
            <form onSubmit={handleSubmit}>
                <h3>How would you rate your service with us?</h3>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="form_inputGroup">
                    <input onChange={handleInputChange} type="text" value={input} placeholder="Write a review"/>
                    <Button type="submit" isDisabled={btnDisabled}>
                        <span><FiSend/></span> Send
                    </Button>
                </div>
                {message && <p className="form_message">{message}</p>}
            </form>
        </Card>
    )
}

export default FeedbackForm