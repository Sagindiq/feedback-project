import Header from "../header/header";
import "./main.scss";
import EmptyFeedback from "../empty-feedback/empty-feedback";
import Filter from "../filter/filter";
import { useEffect, useState } from "react";
import Feedbacks from "../feedbacks/feedbacks";

const Main = () => {

    const [count, setCount] = useState(0)

    const [posts, setPost] = useState([]);

        
    
    return (
        <main className="main">
        <div className="main__container">

                
                <Filter />

                <div className="main__page">
                    <Header />
                    {/* <EmptyFeedback /> */}
                    <Feedbacks />

                </div>
        </div>
        </main>
    );
}


export default Main;