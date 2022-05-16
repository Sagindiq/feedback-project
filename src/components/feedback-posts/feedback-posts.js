import { useContext } from "react";
import { PostContext } from "../../App";

import FeedbackItems from "../feedback-post-array/feedback-postArray";

const FeedbackPosts = () => {


    const { PostArray } = useContext(PostContext);


        
    return (
        <>

        <article className="feedback__posts">

            {
                PostArray.productRequests.map((feedbackItem) => {
                    const {id, title, category, upvotes, status,  description, comments} = feedbackItem;
                    

                    return (
                        <>
                        <FeedbackItems id={id} title={title} category={category} upvotes={upvotes} status={status} description={description} comments={comments} feedbackItem={feedbackItem} />
                        </>
                    );
                })
            }

        </article>
        
        </>
    );
}

export default FeedbackPosts;