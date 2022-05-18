import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../contexts/data";
import FilterRadio from "../filter-radio/filter-radio";
import "./filter.scss";
const Filter = () => {
    
    const [ status, setStatus ] = useState({
        suggestion: 0,
        planned: 0,
        inProgress: 0,
        live: 0
  });

    const {data} = useData();
    
    useEffect(() => {

        const statusCollection = {...status}
    data.productRequests.forEach(post => {
        switch (post.status) {

            case "suggestion":
                statusCollection.suggestion++
                break;

            case "planned":
                statusCollection.planned++
                break;
                
            case "in-progress":
                statusCollection.inProgress++
                break;

            case "live":
                statusCollection.live++
                break;
        
            default:
                break;
        }
    });

    setStatus(statusCollection);

    }, [])

    
    return (
        <>
        <form className="main__filter">

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
                                            <FilterRadio className="filter__roadmap-radio visually-hidden" name="roadmap-radio" labelcname="filter__roadmap-item-label" spanCName="filter__roadmap-span">Planned</FilterRadio>
                                            <strong className="filter__roadmap-item-value">{status.planned}</strong>
                                        </li>
                                        <li className="filter__roadmap-item">
                                            <FilterRadio className="filter__roadmap-radio visually-hidden" name="roadmap-radio" labelcname="filter__roadmap-item-label" spanCName="filter__roadmap-span">In-Progress</FilterRadio>
                                            <strong className="filter__roadmap-item-value">{status.inProgress}</strong>
                                        </li>
                                        <li className="filter__roadmap-item">
                                            <FilterRadio className="filter__roadmap-radio visually-hidden" name="roadmap-radio" labelcname="filter__roadmap-item-label" spanCName="filter__roadmap-span">Live</FilterRadio>
                                            <strong className="filter__roadmap-item-value">{status.live}</strong>
                                        </li>
                                    </ul>

                                    
                                </div>

                            </div>
                </form>
        </>
    );
}

export default Filter;