import React from 'react';

const Divider = (props) => {

    const style={
        width:"200px",
        height : "2px",
        margin: "0 auto",
        backgroundColor : props.color,
    }

    return (
        <div style={style}>
        </div>
    );
};

export default Divider;