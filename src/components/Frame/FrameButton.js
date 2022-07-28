import { useEffect } from 'react';
import PropTypes from 'prop-types';

function FrameButton(props) {
    const Icon = props.icon;
    useEffect(() => {
        let functionName = props.id.substring(4);
        document.getElementById(props.id).addEventListener('click', () => window.app.frame[functionName]());
    }, [props.id]);

    return (
        <button type="button" id={props.id} className={`${props.className || "hover:bg-gray-900"} group font-bold py-2 px-4 `}>
            <Icon className={`${props.iconHover || ""} text-white-50`}></Icon>
        </button> 
    )
}

FrameButton.propTypes = {
    id: PropTypes.string,
    icon: PropTypes.func,
    iconHover: PropTypes.string,
    className: PropTypes.string
};

export default FrameButton;
