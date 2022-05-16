import Header from "../header/header";
import "./main.scss";
import EmptyFeedback from "../empty-feedback/empty-feedback";
import Filter from "../filter/filter";
import { useContext, useEffect, useState } from "react";
import MainIntro from "../main-intro/main-intro";
import { PostContext } from "../../App";
import FeedbackPosts from "../feedback-posts/feedback-posts";

const Main = () => {

    const [count, setCount] = useState(0)

    const [posts, setPost] = useState([]);

    const { PostArray } = useContext(PostContext);
    
    return (
        <main className="main">
        <div className="main__container">

                <div>
                <MainIntro />
                <Filter FeedbackPosts={PostArray} />
                </div>

                <div className="main__page">
                    <Header />
                    {/* <EmptyFeedback /> */}
                    {PostArray.productRequests.length ? <FeedbackPosts /> : <EmptyFeedback />}

                </div>
        </div>
        </main>
    );
}


export default Main;