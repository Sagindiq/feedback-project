import Features from "../feature/feature";
import "../../sass/_general.scss"
// import "./filter-radio.scss"

const FilterRadio = (props) => {
    const { type, ...prop} = props;

    return (
        <label className="filter__label">
            <input className="filter__radio visually-hidden" type="radio" name="filter-radio" />
            <Features className="filter__span" {...prop} />
        </label>
    );
}

export default FilterRadio;