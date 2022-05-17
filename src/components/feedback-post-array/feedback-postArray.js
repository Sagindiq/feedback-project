import upvoteImg from "../../assets/img/upvote-vector.svg"
import Features from "../feature/feature";
import { useContext, useEffect, useRef, useState } from "react";
import "./feedback-posts.scss";
import { Link } from "react-router-dom";


const FeedbackItems = ({id, title, description, category, upvotes, comments}) => {

    const [feedbackItem, setItem] = useState();
    const [count, setCount] = useState(0);
    const [upvote, setUpvote] = useState();
    const upvoteRef = useRef();
    const [upvoteColor, setUpvoteColor] = useState("#4661E6");
    const [commentsArray, setComment] = useState([]);
    const commentCount = comments ? comments.length : 0;



    const HandleUpvoteClick = (evt) => {
        console.log(evt.target.dataset.id);
        

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

        <div className="main__post">

                <div className="main__post-container">
                    
                    <button className={`main__upvote-btn ${count == 1 ? "main__upvote-btn--active" : ""}`} data-id={id} onClick={HandleUpvoteClick}>
                        {/* <img className="main__upvote-image" src={upvoteImg} alt="main upvote img" /> */}
                        <svg className="main__upvote-image" width="11" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.334 6 4-4 4 4" stroke={upvoteColor} /></svg>

                        <p className="main__upvote-number">{upvotes + count}</p>
                    </button>

                    <div className="main__info">
                        <Link to={`/feedback/${id}`} className="main__title">{title}</Link>
                        <p className="main__description">{description}</p>
                        <Features className=" main__category">{category}</Features>
                    </div>
                                
                    <div className="main__comments">
                        <svg width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z" fill="#CDD2EE"/></svg>
                        <p className="main__comments-count">{commentCount}</p>
                    </div>
                </div>

        </div>

    );
}

export default FeedbackItems;