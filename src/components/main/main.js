import { Link } from "react-router-dom";
import Header from "../header/header";
// import Features from "../feature/feature";
import FilterRadio from "../filter-radio/filter-radio";
import "./main.scss";
import "./filter.scss"

const Main = () => {
    
    return (
        <div className="main">
        <div className="main__container">
                <div className="main__filter">
                    <div className="main__filter-info">
                        <h2>Frontend Mentor</h2>
                        <p>Feedback Board</p>
                    </div>

                        <div className="main__filter-selections">
                            <div className="main__filter-content">
                                <FilterRadio  name="filter-radio">All</FilterRadio>
                                <FilterRadio name="filter-radio">UI</FilterRadio>
                                <FilterRadio name="filter-radio">UX</FilterRadio>
                                <FilterRadio name="filter-radio">Enhancement</FilterRadio>
                                <FilterRadio name="filter-radio">Bug</FilterRadio>
                                <FilterRadio name="filter-radio">Feature</FilterRadio>
                            </div>

                        </div>

                            <div className="filter__roadmap">
                                
                                <div className="filter__roadmap-content">
                                    <div className="filter__roadmap-head">
                                        <h2 className="filter__roadmap-title">Roadmap</h2>
                                        <Link className="filter__roadmap-link" to="/">View</Link>
                                    </div>
                                    <ul className="filter__roadmap-list">
                                        <li className="filter__roadmap-item">
                                            <p className="filter__roadmap-item-text">Planned</p>
                                            <strong className="filter__roadmap-item-value">2</strong>
                                        </li>
                                        <li className="filter__roadmap-item">
                                            <p className="filter__roadmap-item-text">In-Progress</p>
                                            <strong className="filter__roadmap-item-value">3</strong>
                                        </li>
                                        <li className="filter__roadmap-item">
                                            <p className="filter__roadmap-item-text">Live</p>
                                            <strong className="filter__roadmap-item-value">1</strong>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                </div>

                <div className="main__page">
                    <Header />
                </div>
        </div>
        </div>
    );
}


export default Main;