import React from 'react';

const Location = props => {
    // Object Destructuring
    const { city } = props;

    return (
        <div>
            <h3>{ city }</h3>
        </div>
    );
};

export default Location;