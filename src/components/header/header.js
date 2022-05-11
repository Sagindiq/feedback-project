import "./header.scss";
import HeaderLogo from "../../assets/img/lamp.png";
import HeaderSortBtnImg from "../../assets/img/down-vector.svg";
const Header = () => {

    

    return (
        <>
        <header>
            <div className="header__container">
                <img className="header__img" src={HeaderLogo} />

            <strong className="header__suggestion">6 Suggestion</strong>
            
            <button className="header__sort-btn">
                <p className="header__sort-btn-text"><span>Sort by:</span>Null</p>
                <img src={HeaderSortBtnImg} alt="header sort button img" />
            </button>
            
            </div>

            

        </header>
        </>
    );
}

export default Header;