import "./header.scss";
import HeaderLogo from "../../assets/img/lamp.png";
import HeaderSortModal from "../header-sort-modal/header-sort-modal";
import { useData } from "../contexts/data";
import { Link } from "react-router-dom";


const Header = () => {

    const { data } = useData();
    return (
        <>
        <header className="header">
            <div className="header__container">
                <img className="header__img" src={HeaderLogo} />

            <strong className="header__suggestion">{data.productRequests.length} Suggestion</strong>    
            
            <HeaderSortModal />
        
            <Link to="/add" className="add-feedback-btn header__add-feedback-btn" >+ Add Feedback </Link>
            
            </div>

            

        </header>
        </>
    );
}

export default Header;