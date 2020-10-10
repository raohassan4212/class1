import React from 'react';

function Dinner(props) {
    return (
        <div>
            <h1>To day we are serving {props.dishname}</h1>
            <h1>To day we are also serving {props.other} </h1>
        </div>
    );
}

export default Dinner;