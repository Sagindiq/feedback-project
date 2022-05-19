import { Link } from "react-router-dom";
import GoBack from "../back-btn/back-btn";
import Button from "../buttons/button";
import "./faqs-header.scss";

const FeedbackHeader = () => {

    return (
        <header className="faqs__header">
            <div className="faqs__header-container">
                
                <GoBack />

            <Button className="edit-feedback-btn faqs__header-edit-btn">Edit Feedback</Button>

            </div>
        </header>
    );
}

export default FeedbackHeader;