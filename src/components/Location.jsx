import React from 'react';
import PropTypes from 'prop-types';

const Location = props => {
    // Object Destructuring
    const { city } = props;

    return (
        <div>
            <h3>{ city }</h3>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;