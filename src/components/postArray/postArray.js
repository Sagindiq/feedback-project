import upvoteImg from "../../assets/img/upvote-vector.svg"
import Features from "../feature/feature";
import { useEffect, useRef, useState } from "react";
import "./postArray.scss";
import { Link } from "react-router-dom";
import { useData } from "../contexts/data";


const FeedbackItems = (props) => {
    const { id, title, description, category, upvotes, comments, link, isUpvoted, upvoteColor } = props

    const {data , setData} = useData();
    
    const postIndex = data.productRequests.findIndex((post) => {
        return +post.id === id;
    });

    const postObj = data.productRequests.find((post) => +post.id === id);
    const [commentsArray, setComment] = useState([]);
    const commentCount = comments ? comments.length : 0;



    const HandleUpvoteClick = () => {
        

        if (!isUpvoted) {

            setData({
                ...data,
                productRequests: [
                    ...data.productRequests.slice(0, postIndex),
                    {
                        ...postObj,
                        isUpvoted: true,
                        upvotes: upvotes + 1,
                        upvoteColor: "#fff"
                        
                    },
                    ...data.productRequests.slice(postIndex + 1)
                ]
            })

        } else if (isUpvoted) {

            setData({
                ...data,
                productRequests: [
                    ...data.productRequests.slice(0, postIndex),
                    {
                        ...postObj,
                        isUpvoted: false,
                        upvotes: upvotes - 1,
                        upvoteColor: "#4661E6"
                    },
                    ...data.productRequests.slice(postIndex + 1)
                ]
            })

        }

    }

    
    
    useEffect(() => {
        setComment(commentsArray + comments)
    }, [])
    
    
    const IsBtn = (() => {
        if (link) {
            return (
                <Link to={`/feedback/${id}`} className="feedback__title">{title}</Link>
            );

        } else if (!link) {
            
            return (
                <h3 className="feedback__title">{title}</h3>
            )
        }

    })
    
    
    return (

        <div  className="feedback__post">

                <div className="feedback__post-container">
                    
                    <button className={`feedback__upvote-btn ${isUpvoted ? "feedback__upvote-btn--active" : ""}`} data-id={id} onClick={HandleUpvoteClick}>
                        {/* <img className="feedback__upvote-image" src={upvoteImg} alt="feedback upvote img" /> */}
                        <svg className="feedback__upvote-image" width="11" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.334 6 4-4 4 4" stroke={upvoteColor} /></svg>

                        <p className="feedback__upvote-number">{upvotes}</p>
                    </button>

                    <div className="feedback__info">
                        {/* <Link to={to} className="feedback__title">{title}</Link> */}
                        <IsBtn />
                        <p className="feedback__description">{description}</p>
                        <Features className=" feedback__category">{category}</Features>
                    </div>
                                
                    <div className="feedback__comments">
                        <svg width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z" fill="#CDD2EE"/></svg>
                        <p className="feedback__comments-count">{commentCount}</p>
                    </div>
                </div>

        </div>

    );
}

export default FeedbackItems;