import React from 'react';
 
function Child({children}){
    return (
        <img src={children} alt="" />
    );
}
 
export default Child;