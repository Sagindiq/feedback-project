import "./header.scss";
import HeaderLogo from "../../assets/img/lamp.png";
import HeaderSortBtnImg from "../../assets/img/down-vector.svg";
import { Children, useRef, useState } from "react";
import Button from "../buttons/button";
const Header = () => {
    const [className, setClassName] = useState();
    const [isSelectOpen, setSelect] = useState(false);

    const headerSortBtn = () => {
        if (isSelectOpen == false) {
            setSelect(true);
            console.log(isSelectOpen);
            setClassName("header__sort-btn--active");

        } else if (isSelectOpen == true) {
            setSelect(false)
            setClassName("");
            console.log(isSelectOpen);
        }
        // setCount(1);
        // console.log(count);
    }

    return (
        <>
        <header>
            <div className="header__container">
                <img className="header__img" src={HeaderLogo} />

            <strong className="header__suggestion">6 Suggestion</strong>
            
            <button className={`header__sort-btn ${className }`} onClick={headerSortBtn}>
                <p className="header__sort-btn-text">Sort by: <span>Most Upvotes</span></p>
                <img src={HeaderSortBtnImg} alt="header sort button img" />
            </button>

            <Button className="add-feedback-btn header__add-feedback-btn" >+ Add Feedback</Button>
            
            </div>

            

        </header>
        </>
    );
}

export default Header;