
import { useState } from "react";
import { useData } from "../contexts/data";
import "./feedback-add-comment.scss";

const Addcomment = (({index, params}) => {

    const { data, setData } = useData()
    const [postValue, setPostValue] = useState("");

    const handleAddClick = (evt) => {
        evt.preventDefault();
        // console.log(params);
        // console.log(...data.productRequests[index].comments.slice());
        

        setData({

            ...data,
            productRequests: [
                // ...data.productRequests,
                ...data.productRequests.slice(0, index),
                {

                    ...data.productRequests[index],

                    comments: [
                        ...data.productRequests[index].comments,
                        {
                            id: Math.floor(Math.random() * 100),
                            content: postValue,
                            user: {
                                ...data.currentUser
                            },
                            replies: []
                        }
                    ]
                },

                ...data.productRequests.slice(index + 1)
            ]

        })

        setPostValue("");

    }

    return (

        <div className="feedback__add-comment">
            <div className="feedback__add-comment-content">
                <h2 className="feedback__add-comment-title">Add Comment</h2>
                <form className="feedback__add-comment-form">
    
                    <textarea value={postValue} onChange={evt => setPostValue(evt.target.value)} cols="83" rows="5" className="feedback__add-comment-textarea" placeholder="Type your comment here" />
                    
                    <p className="feedback__add-comment-minimum-text">250 Characters left</p>
    
                    <button onClick={handleAddClick} className="feedback__add-comment-submit-btn" type="submit">Post Comment</button>
    
                </form>
            </div>
        </div>

    );
})

export default Addcomment;