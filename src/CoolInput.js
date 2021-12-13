import React from 'react';

export default function CoolInput({ labelText, id, ...otherProps }) {
    return (
        <div>  
            <label htmlFor={id}>{labelText}</label>
            <input id={id} {...otherProps}/>
        </div>
    )
}