import React from "react";
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
    return (
        <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange}></input>
    </label>
    )
    
};


Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
