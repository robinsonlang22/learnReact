import React from 'react';

const Navbar = (props) => {
    return (
        <div style={{ backgroundColor: 'yellow', textAlign: 'center', overflow: 'hidden' }}>
            <button style={{ float: 'left' }}>back</button>
            <span>卖座电影</span>
            <button style={{ float: 'right' }} onClick={() => {
                props.event();
            }}>center</button>
        </div>
    );
};

export default Navbar;


