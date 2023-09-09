import classNames from "classnames"

const Wrapper = (props) => {
    return (
        <div className={classNames('container', ' mx-auto', 'sm:px-6', 'md:px-4', 'lg:px-8', 'px-4', props.className)}>
            {props.children}
        </div>
    )
}

export default Wrapper