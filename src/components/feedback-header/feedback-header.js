import { Link } from "react-router-dom";
import GoBack from "../back-btn/back-btn";
import Button from "../buttons/button";
import "./faqs-header.scss";

const FeedbackHeader = ({id}) => {

    return (
        <header className="faqs__header">
            <div className="faqs__header-container">
                
                <GoBack />

            <Link to={`/edit/${id}`} className="edit-feedback-btn faqs__header-edit-btn">Edit Feedback</Link>

            </div>
        </header>
    );
}

export default FeedbackHeader;