import { Link } from "react-router-dom";
import Header from "../header/header";
// import Features from "../feature/feature";
import FilterRadio from "../filter-radio/filter-radio";
import "./main.scss";
import "./filter.scss"
import EmptyFeedback from "../empty-feedback/empty-feedback";

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
                                <FilterRadio className="filter__radio visually-hidden" labelcname="filter__label" spanCName="filter__span" name="filter-radio">All</FilterRadio>
                                <FilterRadio className="filter__radio visually-hidden" labelcname="filter__label" spanCName="filter__span" name="filter-radio">UI</FilterRadio>
                                <FilterRadio className="filter__radio visually-hidden" labelcname="filter__label" spanCName="filter__span" name="filter-radio">UX</FilterRadio>
                                <FilterRadio className="filter__radio visually-hidden" labelcname="filter__label" spanCName="filter__span" name="filter-radio">Enhancement</FilterRadio>
                                <FilterRadio className="filter__radio visually-hidden" labelcname="filter__label" spanCName="filter__span" name="filter-radio">Bug</FilterRadio>
                                <FilterRadio className="filter__radio visually-hidden" labelcname="filter__label" spanCName="filter__span" name="filter-radio">Feature</FilterRadio>
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
                                            {/* <p className="filter__roadmap-item-text">Planned</p> */}
                                            <FilterRadio className="filter__roadmap-radio visually-hidden" name="roadmap-radio" labelcname="filter__roadmap-item-label" spanCName="filter__roadmap-span">Planned</FilterRadio>
                                            <strong className="filter__roadmap-item-value">2</strong>
                                        </li>
                                        <li className="filter__roadmap-item">
                                            <FilterRadio className="filter__roadmap-radio visually-hidden" name="roadmap-radio" labelcname="filter__roadmap-item-label" spanCName="filter__roadmap-span">In-Progress</FilterRadio>
                                            <strong className="filter__roadmap-item-value">3</strong>
                                        </li>
                                        <li className="filter__roadmap-item">
                                            <FilterRadio className="filter__roadmap-radio visually-hidden" name="roadmap-radio" labelcname="filter__roadmap-item-label" spanCName="filter__roadmap-span">Live</FilterRadio>
                                            <strong className="filter__roadmap-item-value">1</strong>
                                        </li>
                                    </ul>

                                    
                                </div>

                            </div>
                </div>

                <div className="main__page">
                    <Header />

                    <EmptyFeedback />
                </div>
        </div>
        </div>
    );
}


export default Main;