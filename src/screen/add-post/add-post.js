import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoBack from "../../components/back-btn/back-btn";
import { useData } from "../../components/contexts/data";
import RadioSelect from "../../components/radio-component/radio-component";
import "./add-post.scss";

const AddPost = () => {

    const [lastOption, setlastOption] = useState(1);
    const navigate = useNavigate();

    const {data, setData} = useData();

    const [ titleValue, setTitleValue ] = useState("");

    const selections = [
            {
                id: 1,
                text: "Select a category"
            },
            {
                id: 2,
                text: "Feature"
            },
            {
                id:3,
                text: "UI"
            },
            {
                id: 4,
                text: "UX"
            },
            {
                id: 5,
                text: "Enhancement"
            }, 
            {
                id: 6,
                text: "Bug"
            }
        ];

    // const [isSelectOpen, setSelectOpen] = useState(false);
    
    // const [category, setCategory] = useState("Feature");
    const [descriptionValue, setDescriptionValue] = useState("");

    const [className, setClassName] = useState();
    const [isModal, setModal] = useState("");
    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const textAreaRef = useRef(null);

    const isTrue = () => {

        setClassName((className) => {
            return className == "category-btn--active" ? "" : "category-btn--active";
        })

        setModal((modal) => {
            return modal == "category-modal--active" ? "" : "category-modal--active";
        })

    }

    const handleCategoryBtnClick = (evt) => {

        
        isTrue();
        
        
    }
    
    const categoryChange = (evt) => {
        const lastOption = +evt.target.dataset.id;
        setlastOption(lastOption);
        
        categoryRef.current.style = "";
        
    
    }

    const CurrentOption = () => selections.find(option => option.id === lastOption).text;
    
    const handleSubmitBtn = (evt) => {
        evt.preventDefault()
        
        if (titleValue && categoryRef.current.textContent !== "Select a category" && descriptionValue) {
            // const [emptyTitle, setEmptyTitle] = useState("add-post__title-input")
            // setEmptyTitle(titleRef.current.className + " empty");
            // titleRef.current.className = "add-post__title-input-empty";


            setData(
            {
                ...data,
                productRequests: [
                    ...data.productRequests,
                    {
                        id: "sd"
                    }
                ]
            }
        )

        console.log("ishladi");

         } // else if (!titleValue || categoryRef.current.textContent == "Select a category" || !descriptionValue) {
            
        // }

       if (!titleValue) {
                console.log("title yoq");
                titleRef.current.style = "border: 1px solid red;";
            }
            if (categoryRef.current.textContent == "Select a category") {
                console.log("category tanlanmagan");
                categoryRef.current.style = "border: 1px solid red;";

            }
            if (!descriptionValue) {
                console.log("desc yo");
                textAreaRef.current.style = "border: 1px solid red;";
            } 
        
    }


    const changeTitleValue = (evt) => {
        setTitleValue(evt.target.value);
        titleRef.current.className = "add-post__title-input"
        titleRef.current.style = "";

    }

    const changeDescValue = (evt) => {
        setDescriptionValue(evt.target.value);
        textAreaRef.current.className = "add-post__details-textarea";
        textAreaRef.current.style = "";

    }


    return (
        
        <div className="add-post">
            <div className="add-post__container">
                <GoBack />

                <div className="add-post__modal">
                    <div className="add-post__modal-content">

                        <span className="add-post__mark">+</span>
                        <h1 className="add-post__title">Create New Feedback</h1>

                        <form className="add-post__form">
                            <label className="add-post__label">
                                <h2 className="add-post__label-title">Feedback Title</h2>
                                <p className="add-post__label-desc">Add a short, descriptive headline</p>

                                <input ref={titleRef} value={titleValue} onChange={changeTitleValue} className="add-post__title-input" type="text" id="title" />
                                
                            </label>

                                <h2 className="add-post__label-title">Category</h2>
                                <p className="add-post__label-desc">Choose a category for your feedback</p>
                                <button ref={categoryRef} onClick={handleCategoryBtnClick} type="button" className={`add-post__category-btn ${className}`}><CurrentOption /></button>

                                <RadioSelect
                                selections={selections}
                                className="category"
                                modalChange={categoryChange}
                                defaultValue={lastOption}
                                isModal={isModal}
                                width="456px"
                                />

                            <label className="add-post__label">
                                <h2 className="add-post__label-title">Feedback Detail</h2>
                                <p className="add-post__label-desc">Include any specific comments on what should be improved, added, etc.</p>
                                <textarea ref={textAreaRef} value={descriptionValue} onChange={changeDescValue} name="details" cols="58" rows="7" className="add-post__details-textarea"></textarea>
                                {/* <input className="add-post__details-input" type="text" /> */}
                            </label>

                        <Link className="add-post__cancel-btn" to="/">Cancel</Link>

                        <button onClick={handleSubmitBtn} className="add-post__submit-btn">Add Feedback</button>

                        </form>

                    </div>

                </div>
            </div>
        </div>

    );

}

export default AddPost;