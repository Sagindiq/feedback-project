import GoBack from "../../components/back-btn/back-btn";
import "./edit-post.scss";
import editImg from "../../assets/img/edit-mark.svg";

const EditPost = (() => {

    return (
        <div className="edit-post">
            <div className="edit-post__container">

                <GoBack />

                <div className="edit-post__modal">
                    <div className="edit-post__modal-content">

                        <img className="edit-post__mark" src={editImg} alt="Edit mark" />

                        <h1 className="edit-post__title">Editing ''</h1>

                        

                    </div>
                </div>
            </div>
        </div>
    )
})

export default EditPost;