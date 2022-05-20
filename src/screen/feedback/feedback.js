import {  useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../components/contexts/data";
import EmptyFeedback from "../../components/empty-feedback/empty-feedback";
import Features from "../../components/feature/feature";
import FeedbackComments from "../../components/feedback-comments/feedback-comments";
import FeedbackHeader from "../../components/feedback-header/feedback-header";
import FeedbackItems from "../../components/postArray/postArray";
import "./feedback.scss";

const Feedback = (() => {

    const FeedbackParams = useParams();
    
    const { data, setData } = useData();

    const feedbackIndex = data.productRequests.findIndex((fItem) => {
        return +fItem.id == FeedbackParams.id;
    });
    
    const feedbackItem = data.productRequests.find((feed) => {
        return +feed.id == FeedbackParams.id;
    })
    // const { id, title, upvotes, categorsy, status, description, comments, isUpvoted} = data.productRequests[feedbackIndex];
    const { comments } = feedbackItem;
    
    const commentCount = comments ? comments.length : 0;

    return (

        <div className="feedback">
            <FeedbackHeader id={FeedbackParams.id} />
            <div  className="feedback__container">
                
            <FeedbackItems {...feedbackItem} link={false} />

            {
                comments ? <FeedbackComments commentCount={commentCount} currenComment={comments} /> : <h2 style={{textAlign: "center", marginTop: "70px", lineHeight: "3"}}>Comment doesn't have: <br /> Hali commment qoshish va reply qilish joylarini qilmaganman</h2>
            }
        </div>
        </div>

    )
})

export default Feedback;