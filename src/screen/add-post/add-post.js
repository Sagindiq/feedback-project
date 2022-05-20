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

    const [className, setClassName] = useState("");
    const [isModal, setModal] = useState("");

    const titleRef = useRef(null);
    const categoryRef = useRef(null);
    const textAreaRef = useRef(null);

    const titleEmpty = useRef(null);
    const categoryEmpty = useRef(null);
    const detailsEmpty = useRef(null);


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
        categoryEmpty.current.className = "category-empty";
    }
    
    const categoryChange = (evt) => {
        const lastOption = +evt.target.dataset.id;
        setlastOption(lastOption);

        isTrue();
    }

    const CurrentOption = () => selections.find(option => option.id === lastOption).text;
    
    const handleSubmitBtn = (evt) => {
        evt.preventDefault()
        
        if (titleValue && categoryRef.current.textContent !== "Select a category" && descriptionValue) {


            setData(
            {
                ...data,
                productRequests: [
                    ...data.productRequests,
                    {
                        id: data.productRequests.length + 1,
                        title: titleValue,
                        category: CurrentOption(),
                        upvotes: 0,
                        status: "suggestion",
                        description: descriptionValue,
                        comments: []
                    }
                ]
            }
        )

        setTitleValue("");
        setDescriptionValue("");
        setlastOption(1);

        navigate("/");

        } // else if (!titleValue || categoryRef.current.textContent == "Select a category" || !descriptionValue) {
        
            // }
            
       if (!titleValue.trim()) {
           console.log("title yoq");
           titleRef.current.focus();
            titleRef.current.className = "add-post__title-input-empty"
            titleEmpty.current.className = "title-empty--active";
                
        }

        if (categoryRef.current.textContent == "Select a category") {
            console.log("category tanlanmagan");
            categoryRef.current.className = "add-post__category-btn-empty";
            categoryEmpty.current.className = "category-empty--active";
        }
        
        if (!descriptionValue.trim()) {
            console.log("desc yo");
            textAreaRef.current.focus();
            textAreaRef.current.className = "add-post__details-textarea-empty"
            detailsEmpty.current.className = "textarea-empty--active";
        } 
        
    }
    
    
    const changeTitleValue = (evt) => {
        
        setTitleValue(evt.target.value);
        titleRef.current.className = "add-post__title-input"
        titleEmpty.current.className = "title-empty";
        
    }
    
    const changeDescValue = (evt) => {

        setDescriptionValue(evt.target.value);
        textAreaRef.current.className = "add-post__details-textarea";
        detailsEmpty.current.className = "textarea-empty";

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
                                <span ref={titleEmpty} className="title-empty">Title is empty. Please fill out title</span>
                                
                            </label>

                                <h2 className="add-post__label-title">Category</h2>
                                <p className="add-post__label-desc">Choose a category for your feedback</p>
                                <button ref={categoryRef} onClick={handleCategoryBtnClick} type="button" className={`add-post__category-btn ${className}`}><CurrentOption /></button>
                                <span ref={categoryEmpty} className="category-empty">Category is not selected. Please select option</span>

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
                                <span ref={detailsEmpty} className="textarea-empty">Details is empty. Please fill out the details</span>
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