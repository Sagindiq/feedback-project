import {  useRef, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../contexts/data";
import Features from "../feature/feature";
import FeedbackComments from "../feedback-comments/feedback-comments";
import FeedbackItems from "../postArray/postArray";
import "./feedback-details.scss";

const FeedbackDetails = (() => {

    const FeedbackParams = useParams();
    
    const { data, setData } = useData();

    const feedbackIndex = data.productRequests.findIndex((fItem) => {
        return +fItem.id == FeedbackParams.id;
    });
    
    const feedbackItem = data.productRequests.find((feed) => {
        return +feed.id == FeedbackParams.id;
    })
    // const { id, title, upvotes, category, status, description, comments, isUpvoted} = data.productRequests[feedbackIndex];
    const { comments } = feedbackItem;
    
    const commentCount = comments ? comments.length : 0;

    return (

        <div  className="feedback__container">
                
                <FeedbackItems {...feedbackItem} link={false} />

            <FeedbackComments commentCount={commentCount} currenComment={data.productRequests[feedbackIndex].comments} />

        </div>

    )
})

export default FeedbackDetails;