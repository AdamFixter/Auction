import PropTypes from 'prop-types';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

function SideBarItem(props) {
    const [active, setActive] = useState();
    const Icon = props.icon;

    return (
        <NavLink to={props.to} className={(navData) => {
            setActive(navData.isActive);
            return 'my-1 mx-1'
        }}>
            <button type="button" className={`group rounded-md py-2 px-3 w-16 h-16 ${active ? "bg-gray-600" : "hover:bg-gray-700"}`}>
                <div className='flex flex-col items-center'>
                    <Icon className={`h-6 w-6 ${active ? "text-yellow-200" : "text-white-200"}`}></Icon>
                    <h6 className={`${active ? "hidden" : ""} text-xs text-white-100 m-0`}>{props.name}</h6>
                </div>
            </button> 
        </NavLink>
    )
}

SideBarItem.propTypes = {
    name: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.func,
};

export default SideBarItem;
