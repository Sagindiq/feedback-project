import { useEffect, useRef } from "react";
import "./radio-component.scss"

const RadioSelect = (({selections, isModal, modalChange, defaultValue, className, value = "", width = "300px"}) => {
    const listRef = useRef();

    useEffect(() => {
        if (value) {
            const changedInput = listRef.current.querySelector(`input[data-value='${value}']`)
            changedInput.checked = true;
            console.log(changedInput);
        }
    }, [value]);

    return (
        <div style={{width}} className={`selector-modal ${className ? `${className}-modal` : "" } ${isModal ? `${isModal}` : "" }`}>
            <ul ref={listRef} onChange={modalChange} className="selector-modal__list">
                {
                    selections.map((option) => {
                        const {text, id} = option;

                        return (
                            <li key={id} className="selector-modal__item">

                                <label className="selector-modal__label">
                                    <input defaultValue={+id} data-value={id} defaultChecked={defaultValue === id} data-id={id}  type="radio" className="selector-modal__input visually-hidden" name="selector-input" id="selector-input"  />
                                    {text}
                                    <span className="selector-modal__selected-mark"></span>
                                </label>

                            </li>
                            
                        );
                    })
                }
            </ul>
        </div>
    )
})

export default RadioSelect;