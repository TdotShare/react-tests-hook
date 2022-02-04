import React, { useEffect } from 'react';



function Content() {

    useEffect(() => { // componentWillUnmount
        return () => {
            console.log('content => componentWillUnmount!');
        };
    });

    return (
        <div style={{ 'backgroundColor': 'red', 'color': 'white' }}>
            <b>component Content</b>
        </div>
    );
}

export default Content;
