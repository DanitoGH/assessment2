import React from 'react';
import PropTypes from 'prop-types';

import { FormControl } from "react-bootstrap";

const Dropdown = ({options,dropdownCategory, roomChecked, roomNumber,adultRoomValue, childrenRoomValue, onChange }) => {

    const handleChange = (e) => {
        const { value } = e.target;
        onChange({
            Category: dropdownCategory,
            selectedValue: value,
            roomNumber: roomNumber 
        })
    }

    const defaultValue = (dropdownCategory === 'Adults'? 1 : 0)
    const defaultSelectedValue = (dropdownCategory === 'Adults'? adultRoomValue: childrenRoomValue)

    return (
        <FormControl
                className="mt-1 mb-2"
                as="select"
                disabled={ !roomChecked? true : false }
                value={ adultRoomValue && childrenRoomValue !== ''? defaultSelectedValue : defaultValue  }
                onChange={handleChange}>
                { !roomChecked? dropdownCategory === 'Adults'? 
                    <option value={1}>1</option> : 
                    <option value={0}>0</option> : null 
                }
                {
                roomChecked && options.map((option, key) => (
                    <option 
                        key={key}
                        value={option.value}
                    >
                    { option.label}
                    </option>
                ))
                }
         </FormControl>
    )
}

Dropdown.protoTypes = {
    options: PropTypes.array.isRequired,
    roomChecked: PropTypes.bool.isRequired,
    dropdownCategory: PropTypes.string.isRequired
}
 
 export default Dropdown;