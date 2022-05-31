import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from "../context/FeedbackContext"
import {useContext} from 'react'

function FeedbackList() {
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.length <= 0){
        return (
            <div className="feedback_wrapper">
                No feedbacks yet.
            </div>
        )
    }

    return (
        <div className="feedback_wrapper">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key = {item.id}
                        initial = {{
                            y: -100,
                            opacity: 0
                        }}
                        animate = {{
                            y: 0,
                            opacity: 1
                        }}
                        exit={{
                            y: 100,
                            opacity: 0
                        }}
                        style={{width: '100%'}}
                    >
                        <FeedbackItem key={item.id} item={item}/>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default FeedbackList