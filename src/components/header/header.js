import "./header.scss";
import HeaderLogo from "../../assets/img/lamp.png";
import { Children, useContext, useRef, useState } from "react";
import Button from "../buttons/button";
import { PostContext } from "../../App";
import HeaderSortModal from "../header-sort-modal/header-sort-modal";


const Header = () => {

    const { PostArray } = useContext(PostContext);

    return (
        <>
        <header>
            <div className="header__container">
                <img className="header__img" src={HeaderLogo} />

            <strong className="header__suggestion">{PostArray.productRequests.length} Suggestion</strong>    
            
            <HeaderSortModal />
        
            <Button className="add-feedback-btn header__add-feedback-btn" >+ Add Feedback</Button>
            
            </div>

            

        </header>
        </>
    );
}

export default Header;