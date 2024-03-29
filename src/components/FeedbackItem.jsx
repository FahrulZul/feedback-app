import Card from "./shared/Card";
import { TiTrash, TiEdit } from "react-icons/ti";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

    return (
        <Card customClass={"feedback_item"}>
            <div className="feedback_rating">{item.rating}</div>
            <button
                className="feedback_btnDelete"
                onClick={() => deleteFeedback(item.id)}
            >
                <TiTrash />
            </button>
            <button
                className="feedback_btnEdit"
                onClick={() => editFeedback(item)}
            >
                <TiEdit />
            </button>
            <p className="feedback_text">{item.text}</p>
        </Card>
    );
}

export default FeedbackItem;
