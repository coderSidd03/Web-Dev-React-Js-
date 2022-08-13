import React from 'react';

function Detail (props) {
    return (
        <p className='info'>{props.detailInfo}</p>
        //here we have taken detailInfo as an attribute name for detail
        //thatswhy we written {props.detailInfo}
    );
}

export default Detail;