import React from 'react';
import './Name.css';


const Name = ({name})=>{
    return(
        <div className='name'>
            Hello, my name is <strong>{name}</strong>.This is a basic example
        </div>
    )
}
export default Name;
