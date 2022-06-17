import React from "react";
import PropTypes from "prop-types"; //eslint-disable-line

const Button = ({ buttonStyle, type, text, onClick }) => {
    const dltButtonClassnames = "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900";
    const addButtonClassnames = "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";

    return (
    <div className="p-1">
        <button
        className={
            buttonStyle === "dlt"
            ?
            dltButtonClassnames
            :
            buttonStyle === "add"
            ?
            addButtonClassnames
            :
            null
        }
        onClick={onClick} 
        type={type}
        >
            {text}
        </button>
    </div>
    );
};

export default Button;