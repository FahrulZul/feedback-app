import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is feedback item 1',
            rating: 9
        },
        {
            id: 2,
            text: 'This item is feedback item 2',
            rating: 9
        },
        {
            id: 3,
            text: 'This item is feedback item 3',
            rating: 9
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback]);
    }

    // Delete Feedback
    const deleteFeedback = (id) => {
        setFeedback(feedback.filter((item) => item.id !== id))
    }

    //  Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    // Update Item
    const updateFeedback = (id, updtItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updtItem}: item))
    }



    return(
        <FeedbackContext.Provider value={
            {
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                updateFeedback,
                editFeedback
            }
        }>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext