import { useState } from "react";

const HeaderSortModal = ({ isModal }) => {
    
    // const selections = [
    //    "Most Upvotes",
    //    "Least Upvotes",
    //    "Most Comments",
    //    "Least Comments"
    // ]
    const [className, setClassName] = useState("sort-modal--active");

    const HandleSortBtnClick = (() => {
        setClassName("")
    })

    
    return (
        <div className={`sort-modal ${isModal}`}>
            <ul className="sort-modal__list">
                {
                selections.map((option) => {

                    return (

                        <li key={option} className="sort-modal__item">
                            <button key={option} onClick={HandleSortBtnClick} className="filter__option-btn">{option}</button>
                        </li>

                    );
                })
            }
            </ul>
        </div>
    );
}

export default HeaderSortModal;