import React from 'react'

import '../styles/table.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps}) => (
    <div className='input-group'>
        {label ? (<label>{label}</label>) : null }
        <br/>
        <input className="form-input" onChange={handleChange} {...otherProps}/>
    </div>
);

export default FormInput;
