import { Link } from "react-router-dom";
import BackBtnImg from "../../assets/img/go-back.svg"
import Button from "../buttons/button";
import "./faqs-header.scss";

const FeedbackHeader = () => {

    return (
        <header className="faqs__header">
            <div className="faqs__header-container">
                <Link className="faqs__header-back-btn" to="/">
                <img src={BackBtnImg} alt="Go Back" />
                <strong>Go Back</strong>
            </Link>

            <Button className="edit-feedback-btn faqs__header-edit-btn">Edit Feedback</Button>

            </div>
        </header>
    );
}

export default FeedbackHeader;