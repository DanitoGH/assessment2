import React from 'react';
import PropTypes from 'prop-types';

import { FormCheck, FormLabel  } from 'react-bootstrap';


const Checkbox = ({ label , roomNumber,  checked, onChange }) => {

    const handleChange = (e) => {
        const { checked } = e.target
        onChange({checked: checked, roomNumber: roomNumber})
    }

    return (
        <div>
           { (roomNumber !== 1)? 
             <FormCheck 
                type="checkbox"
                label={label}
                value={checked}
                checked={checked}
                onChange={handleChange}
            /> : <FormLabel>Room 1</FormLabel>  }

        </div>
    );
};

Checkbox.protoTypes = {
   label: PropTypes.string.isRequired,
   roomNumber: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired
}

 export default Checkbox;