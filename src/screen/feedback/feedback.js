import {  useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../../contexts/data";
import EmptyFeedback from "../../components/empty-feedback/empty-feedback";
import Features from "../../components/feature/feature";
import Addcomment from "../../components/feedback-add-comment/feedback-add-comment";
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
    const { comments, ...prop } = feedbackItem;
    
    const commentCount = comments ? comments.length : 0;

    return (

        <div className="feedback">
            <FeedbackHeader id={FeedbackParams.id} />
            <div  className="feedback__container">
                
            <FeedbackItems {...feedbackItem} link={false} />

            {
                comments ? <FeedbackComments currentItem={feedbackItem} commentCount={commentCount} currenComment={comments} /> : null
            }

            <Addcomment index={feedbackIndex} params={FeedbackParams} />
        </div>
        </div>

    )
})

export default Feedback;