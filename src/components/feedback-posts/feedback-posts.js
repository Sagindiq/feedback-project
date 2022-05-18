import { useData } from "../contexts/data";
import FeedbackItems from "../feedback-post-array/feedback-postArray";

const FeedbackPosts = () => {


    const { data } = useData();

        
    return (
        <>

        <article className="feedback__posts">

            {
                data.productRequests.map((feedbackItem) => {
                    const {id, title, category, upvotes, status,  description, comments} = feedbackItem;
                    

                    return (
                        <>
                        <FeedbackItems key={id} id={id} title={title} category={category} upvotes={upvotes} status={status} description={description} comments={comments} link={true} />
                        </>
                    );
                })
            }

        </article>
        
        </>
    );
}

export default FeedbackPosts;