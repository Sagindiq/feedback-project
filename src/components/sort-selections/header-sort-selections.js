import selections from "./selections-data";

const HeaderSortModal = () => {

    console.log(selections);

    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

    return (
        <div className="sort-modal">
            <select name="sort-modal" id="sort-modal">
                <option value="most-upvotes">Most Upvotes</option>
                <option value=""></option>
            </select>
        </div>
    );
}

export default HeaderSortModal;