import { Children } from "react";

const Button = ({...prop}) => {

    return (
        <button {...prop} />
    );
}

export default Button;