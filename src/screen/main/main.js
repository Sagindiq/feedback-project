import Header from "../../components/header/header";
import "./main.scss";
import EmptyFeedback from "../../components/empty-feedback/empty-feedback";
import Filter from "../../components/filter/filter";
import { useContext, useEffect, useState } from "react";
import MainIntro from "../../components/main-intro/main-intro";
import { PostContext } from "../../App";
import FeedbackPosts from "../../components/feedback-posts/feedback-posts";
import { useData } from "../../contexts/data";

const Main = () => {

    const [count, setCount] = useState(0)

    const [posts, setPost] = useState([]);

    const { data } = useData();

    // console.log(selections);
    
    return (
        <main className="main">
        <div className="main__container">

                <div>
                <MainIntro />
                <Filter FeedbackPosts={data} />
                </div>

                <div className="main__page">
                    <Header />
                    {/* <EmptyFeedback /> */}
                    {data.productRequests.length ? <FeedbackPosts /> : <EmptyFeedback />}

                </div>
        </div>
        </main>
    );
}


export default Main;