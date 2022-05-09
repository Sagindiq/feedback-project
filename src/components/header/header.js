import "./header.scss";
import HeaderLogo from "../../assets/img/lamp.png"
const Header = () => {

    

    return (
        <>
        <header>
            <div className="header__container">
                <img className="header__img" src={HeaderLogo} />

            <strong className="header__suggestion">6 Suggestion</strong>
            
            
            </div>

            

        </header>
        </>
    );
}

export default Header;