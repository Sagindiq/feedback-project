import FeedbackDetails from "../feedback-details/feedback-details";
import FeedbackHeader from "../feedback-header/feedback-header";

const Feedbacks = () => {


    return (
        <>
        <div className="feedback">
            <FeedbackHeader />
            <FeedbackDetails />
        </div>
        </>
    );
}

export default Feedbacks;