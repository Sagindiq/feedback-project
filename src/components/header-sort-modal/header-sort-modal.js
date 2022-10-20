import { useState } from "react";
import HeaderSortBtnImg from "../../assets/img/down-vector.svg";
import { useData } from "../../contexts/data";
import RadioSelect from "../radio-component/radio-component";
import "./header-sort-modal.scss"



const HeaderSortModal = (() => {

    const [className, setClassName] = useState();
    // const [isSelectOpen, setSelectOpen] = useState(false);
    const [lastOption, setOption] = useState("1");
    const [isModal, setModal] = useState("");
    const {data, setData} = useData();

    const selections = [
            {
                id: 1,
                text: "Most Upvotes"
            },
            {
                id:2,
                text: "Least Upvotes"
            },
            {
                id: 3,
                text: "Most Comments"
            },
            {
                id: 4,
                text: "Least Comments"
            }
        ]

    const isTrue = () => {

        // setSelectOpen((selectOpen) => {
        //     return !selectOpen;
        // })

        setClassName((className) => {
            return className == "header__sort-btn--active" ? "" : "header__sort-btn--active";
        })

        setModal((modal) => {
            return modal == "header-modal--active" ? "" : "header-modal--active";
        })

    }
    
    const HandleSortBtnClick = () => {

        isTrue()

    }

    const SortModalChange = ((evt) => {
        const lastOption = evt.target.dataset.id;
        setOption(lastOption);
        
        // isTrue()

        console.log(evt.target.dataset.id);
        console.log(lastOption);

        setData(
            {
                ...data,
                productRequests: data.productRequests.sort((a, b) => {
                    switch (lastOption) {
                        case "1":
                            return b.upvotes - a.upvotes;
                        case "2":
                            return a.upvotes - b.upvotes;
                        case "3": 
                            return (b.comments?.length || 0) - (a.comments?.length || 0)  
                        case "4": 
                            return (a.comments?.length || 0) - (b.comments?.length || 0)  
                    
                        default:
                            return 0;
                    }
                })
            }
        )
        
    })

    const CurrentOption = () => selections.find(option => option.id == lastOption).text;

    return (
        <div>
            <button className={`header__sort-btn ${className }`} onClick={HandleSortBtnClick}>
                    <p className="header__sort-btn-text">Sort by: <span><CurrentOption /></span></p>
                    <img className="header__sort-btn-img" src={HeaderSortBtnImg} alt="header sort button img" />
            </button>

            <RadioSelect
            selections={selections}
            className={"header"}
            modalChange={SortModalChange}
            defaultValue={lastOption}
            isModal={isModal}
            width="255px"
            />

        </div>
    );
})

export default HeaderSortModal;