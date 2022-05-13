import Features from "../feature/feature";

const FilterRadio = (props) => {
    const {spanCName, labelcname, children, ...prop} = props;


    return (
        <label className={labelcname}>
            <input type="radio" {...prop} />
            <Features className={spanCName} children={children} />
        </label>
    );
}

export default FilterRadio;