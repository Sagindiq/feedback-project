import BackBtnImg from "../../assets/img/go-back.svg"
import { Link } from "react-router-dom";
import "./back-btn.scss";


const GoBack = () => {

    return (
        <Link className="faqs__header-back-btn" to="/">
                <img src={BackBtnImg} alt="Go Back" />
                <strong>Go Back</strong>
        </Link>
    )
}

export default GoBack;