import "./feedback-comment.scss"

const FeedbackComments = (({currenComment}) => {

    
    return (
        <div className="feedback__comment">
            <h2 className="feedback__comment-title comments-count">{`${currenComment.length} Comments`}</h2>
            <div className="feedback__comment-people">
                {
                    currenComment.map((comment) => {
                        const {id, content, user, replies} = comment;
                        const { image, name, username} = user;
                        
                        // console.log(currenComment.replies);

                        const commentReply = () => {

                            if (replies) {

                            replies.map((reply) => {
                                const { content, replyingTo, user } = reply
                                const {image, name, username} = user;
                                console.log(content);
                            })

                            console.log(replies.length);

                        } else {
                            console.log("have not");
                        }

                        }

                        // yuqoridagi ayrim kodlar shunchaki tekshirib ko'rish uchun yozildi.
                    return (

                    <div key={id} className="feedback__comment">
                        <div className="feedback__comment-person">
                            <img className="feedback__comment-person-img" src={`.${image}`} alt="user" />
                            <div className="feedback__comment-info">
                        
                                <div className="feedback__comment-info-head">
                                    <div className="feedback__personal-information">
                                        <h3 className="feedback__person-title">{name}</h3>
                                        <p className="feedback__comment-username">{`@${username}`}</p>
                                    </div>
                                    <button className="feedback__comment-reply-btn">Reply</button>
                                </div>
                                <p className="feedback__comment-description">{content}</p>
                            </div>
                        </div>


                    </div>
                    
                    );
                    
                })
            }
            </div>

        </div>
    );
})

export default FeedbackComments;