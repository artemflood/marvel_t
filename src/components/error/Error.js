import React from 'react';
import img from './error.gif'
const Error = () => {
    return (
/*        <img src={process.env.PUBLIC_URL + '/error.gif'} alt=""/>*/
        <img style={{display: 'block', width: '250px', height:
                '250px', objectFit: 'contain',
            margin: '0 auto'
        }} src={img} alt="Error"/>
    );
};

export default Error;