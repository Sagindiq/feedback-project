import { useState } from "react";
import HeaderSortBtnImg from "../../assets/img/down-vector.svg";
import HeaderSortBtn from "../header-sort-btn/header-sort-btn";



const HeaderSortModal = (() => {

    const [className, setClassName] = useState();
    const [isSelectOpen, setSelect] = useState(false);
    const [lastOption, setOption] = useState("Most Upvotes");
    const [isModal, setModal] = useState("");
    // const [isChecked, setChecked] = useState("");

    const selections = [
            {
                id: 1,
                name: "Most Upvotes"
            },
            {
                id:2,
                name: "Least Upvotes"
            },
            {
                id: 3,
                name: "Most Comments"
            },
            {
                id: 4,
                name: "Least Comments"
            }
    ]

    const HandleSortBtnClick = () => {

        if (isSelectOpen == false) {
            setSelect(true);
            setClassName("header__sort-btn--active");
            setModal("sort-modal--active")

        } else if (isSelectOpen == true) {
            setSelect(false)
            setClassName("");
            setModal("")
        }
    }

    const SortModalChange = (evt) => {

        const elementName = evt.target.dataset.name;
        const elementId = +evt.target.dataset.id;
        const elements = evt.target.elements;

        if (isSelectOpen == false) {
            setSelect(true);
            setClassName("header__sort-btn--active");
            setModal("sort-modal--active");
            
            
        } else if (isSelectOpen == true) {
            setSelect(false)
            setClassName("");
            setModal("")
            setOption(elementName)

        }

    }
    
    return (
        <div>
            <button className={`header__sort-btn ${className }`} onClick={HandleSortBtnClick}>
                    <p className="header__sort-btn-text">Sort by: <span>{lastOption}</span></p>
                    <img className="header__sort-btn-img" src={HeaderSortBtnImg} alt="header sort button img" />
            </button>

            <div className={`sort-modal ${isModal}`}>
                <ul className="sort-modal__list">
                    {
                        selections.map((option) => {

                            return (

                                <HeaderSortBtn key={option.id} option={option} children={option.name} onClick={SortModalChange} data-name={option.name} checkedOption={lastOption} />
                                // <h1>salom</h1>

                            );
                        })
                    }
                </ul>
            </div>

        </div>
    );
})

export default HeaderSortModal;