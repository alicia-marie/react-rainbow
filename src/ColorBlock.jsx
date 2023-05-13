import React from 'react';

function ColorBlock({ color }) {
    return <div className="ColorBlock"
                style={ 
                    {backgroundColor: color}
                }
            >
        <p>{ color }</p>
    </div>

}

export default ColorBlock;
