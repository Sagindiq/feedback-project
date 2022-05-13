import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import upvoteImg from "../../assets/img/upvote-vector.svg"
import Features from "../feature/feature";
import "./feedback.scss";

const Feedbacks = () => {

    const [feedbacksArray, setFeedback] = useState([]);
    const [count, setCount] = useState(0);
    const [upvote, setUpvote] = useState();
    const upvoteRef = useRef();

    useEffect(() => {

        fetch('/data.json')
            .then(response => response.json())
            .then(data => setFeedback(data.productRequests))

    }, []);
    
    // const HandleBtnClick = () => {
    //     setCount(count + 1);
    //     console.log(feedbacksArray);
    // }


    const HandleUpvoteClick = () => {

        feedbacksArray.map((feedbackItem) => {

            
            // console.log(feedbackItem == upvoteRef.current.textContent);
        })
        

        if (count == 0) {

            setCount(1);
            setUpvote(upvote + 1);
            console.log("ishladi +");

        } else if (count == 1) {

            setCount(0)
            setUpvote(upvote - 1)
            console.log("ishladi -");
        }

    }
        
    return (
        <>
        <ul className="feedback__list">
            {
                feedbacksArray.map((feedbackItem) => {
                    const {id, title, category, upvotes, status,  description, } = feedbackItem;

                    return (
                        <li key={id} className="feedback__item">

                            <div className="feedback__item-container">
                                <button className={`feedback__upvote-btn ${count == 1 ? "feedback__upvote-btn--active" : ""}`} ref={upvoteRef} onClick={HandleUpvoteClick}>
                                    <img className="feedback__upvote-image" src={upvoteImg} alt="feedback upvote img" />
                                    {/* <svg className="feedback__upvote-image" width="11" height="7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1.334 6 4-4 4 4" stroke="#4661E6" stroke-width="2"/></svg> */}

                                    <p className="feedback__upvote-number">{upvotes + count}</p>
                                </button>

                                <div className="feedback__info">
                                    <h1 className="feedback__title">{title}</h1>
                                    <p className="feedback__description">{description}</p>
                                    <Features className=" feedback__category">{category}</Features>
                                </div>
                                
                                <div className="feedback__comments">
                                    <svg width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16Z" fill="#CDD2EE"/></svg>
                                    <p className="feedback__comments-count">2</p>
                                </div>
                            </div>

                        </li>
                    )
                })
            }
        </ul>
        </>
    );
}

export default Feedbacks