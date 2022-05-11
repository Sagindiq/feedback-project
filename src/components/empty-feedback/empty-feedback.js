import EmptyIcon from "../../assets/img/empty-icon.svg";
import Button from "../buttons/button";
import "./empty-feedback.scss";
const EmptyFeedback = () => {

    return (
        <div className="empty-feedback">
            <div className="empty-feedback__container">
                <img className="empty-feedback__img" src={EmptyIcon} alt="empty page" />
                <h2 className="empty-feedback__title">There is no feedback yet.</h2>
                <p className="empty-feedback__description">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                <Button className="add-feedback-btn empty-feedback__add-feedback">+ Add Feedback</Button>
            </div>
        </div>
    );
}

export default EmptyFeedback;