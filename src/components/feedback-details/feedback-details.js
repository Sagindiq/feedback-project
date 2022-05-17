import { useContext, useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PostContext } from "../../App";
import Features from "../feature/feature";
import FeedbackComments from "../feedback-comments/feedback-comments";
import "./feedback-details.scss";

const FeedbackDetails = (() => {

    const FeedbackParams = useParams();
    
    const { PostArray } = useContext(PostContext);

    const feedbackIndex = PostArray.productRequests.findIndex((fItem) => {
        return +fItem.id == FeedbackParams.id;
    });

    const { id, title, upvotes, category, description, comments} = PostArray.productRequests[feedbackIndex];

    // // const [feedbackItem, setItem] = useState();
    const [count, setCount] = useState(0);
    const [upvote, setUpvote] = useState();
    // const upvoteRef = useRef();
    const [upvoteColor, setUpvoteColor] = useState("#4661E6");
    const [commentsArray, setComment] = useState([]);
    const commentCount = comments ? comments.length : 0;



    const HandleUpvoteClick = () => {
        

        if (count == 0) {

            setCount(1);
            setUpvote(upvote + 1);
            setUpvoteColor("#fff");

        } else if (count == 1) {

            setCount(0)
            setUpvote(upvote - 1)
            setUpvoteColor("#4661E6");

        }

    }
    
    useEffect(() => {
        setComment(commentsArray + comments)
    }, [])

    return (

        <div  className="feedback__container">

                <div className="feedback__post" data-id={id}>
                    
                     <button className={`feedback__upvote-btn ${count == 1 ? "feedback__upvote-btn--active" : ""}`} onClick={HandleUpvoteClick}>
                      <svg className="feedback__upvote-image" width="11" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.334 6 4-4 4 4" stroke={upvoteColor} /></svg>

                         <p className="feedback__upvote-number">{upvotes + count}</p>
                     </button>

                    <div className="feedback__info">
                        <h3 className="feedback__title">{title}</h3>
                        <p className="feedback__description">{description}</p>
                        <Features className="feedback__category">{category}</Features>

                    </div>
                                
                    <div className="feedback__comments">
                        <svg width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z" fill="#CDD2EE"/></svg>
                        <p className="feedback__comments-count">{commentCount}</p>
                    </div>

                </div>

            <FeedbackComments commentCount={commentCount} currenComment={PostArray.productRequests[feedbackIndex].comments} />
        </div>

    )
})

export default FeedbackDetails;