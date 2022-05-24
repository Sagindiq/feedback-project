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


                        const handleReplyClick = () => {
                            console.log("ishladi");
                        } 


                        return (
                            
                            <div key={id} className="feedback__comment">
        
                                <div style={{

                                    marginTop: replies ? "0" : "50px"

                                }} className="feedback__comment-person">
                                    <img className="feedback__comment-person-img" src={`.${image}`} alt="user" />
                                    <div className="feedback__comment-info">
                                
                                        <div className="feedback__comment-info-head">
                                            <div className="feedback__personal-information">
                                                <h3 className="feedback__person-title">{name}</h3>
                                                <p className="feedback__comment-username">{`@${username}`}</p>
                                            </div>
                                            <button onClick={handleReplyClick} className="feedback__comment-reply-btn">Reply</button>
                                        </div>
                                        <p className="feedback__comment-description">{content}</p>
                                    </div>
                                </div>

                                <span style={{

                                    width: replies ? "1px" : "666px",
                                    height: replies ?  `${replies.length * 200}px` : "1px"

                                }} className={`feedback__comment-line ${replies ? "has-reply" : ""}`}></span>
        
                                {/* <h4>{replies ? console.log(replies) : console.log(replies)}</h4> */}


                                {
                                    replies ? replies.map((reply) => {


                                        const {content, replyingTo, user} = reply;
                                        const {image, name, username} = user;

                                        return (
                                            <div key={username} className="feedback__reply-person">
                                                <img className="feedback__comment-person-img" src={`.${image}`} alt="user" />
                                                
                                                <div className="feedback__reply-info">
                                            
                                                    <div className="feedback__comment-info-head">
                                                        <div className="feedback__personal-information">
                                                            <h3 className="feedback__person-title">{name}</h3>
                                                            <p className="feedback__comment-username">{`@${username}`}</p>
                                                        </div>
                                                        <button onClick={handleReplyClick} className="feedback__comment-reply-btn">Reply</button>
                                                    </div>
                                                    <p className="feedback__reply-description"><span>@{replyingTo }</span> {content}</p>
                                                </div>

                                            </div>
                                        )

                                    }) : null
                                }
        
                            </div>
                    
                    );
                    
                })
            }
            </div>

        </div>
    );
})

export default FeedbackComments;