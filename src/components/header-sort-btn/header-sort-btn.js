import { useEffect, useState } from "react";
import CheckedSort from "../../assets/img/checked.svg";

const HeaderSortBtn = (props) => {
    const {option, checkedOption , ...prop} = props;
    

    return (
        <li className="sort-modal__item">
            <button key={option}  className="sort-modal__btn" {...prop} >
                {option.name}
                <img className="sort-modal__btn-checked" src={CheckedSort} alt="sort checked" />
            </button>
        </li>
    );
}

export default HeaderSortBtn;