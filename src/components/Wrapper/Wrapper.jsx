import classNames from "classnames"

const Wrapper = (props) => {
    return (
        <div className={classNames('px-2', 'sm:px-4', 'lg:px-10', 'xl:px-14', props.className)}>
            {props.children}
        </div>
    )
}

export default Wrapper