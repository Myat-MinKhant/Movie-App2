import classNames from "classnames"

const Wrapper = (props) => {
    return (
        <div className={classNames('container', 'overflow-x-hidden', props.className)}>
            {props.children}
        </div>
    )
}

export default Wrapper