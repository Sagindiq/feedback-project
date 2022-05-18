import "./header.scss";
import HeaderLogo from "../../assets/img/lamp.png";
import Button from "../buttons/button";
import HeaderSortModal from "../header-sort-modal/header-sort-modal";
import { useData } from "../contexts/data";


const Header = () => {

    const { data } = useData();
    return (
        <>
        <header>
            <div className="header__container">
                <img className="header__img" src={HeaderLogo} />

            <strong className="header__suggestion">{data.productRequests.length} Suggestion</strong>    
            
            <HeaderSortModal />
        
            <Button className="add-feedback-btn header__add-feedback-btn" >+ Add Feedback</Button>
            
            </div>

            

        </header>
        </>
    );
}

export default Header;