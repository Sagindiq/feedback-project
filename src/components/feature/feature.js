

const Features = (props) => {
    const {ClassName, ...prop} = props;

    return (
        <span className={ClassName} {...prop} />
    );
}

export default Features;