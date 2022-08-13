
import React from 'react';
import Avatar from './Avatar'
import Heading from './Heading'
import Detail from './Detail'

function Card(props) {
    return (
        <div className="card">

            <div className="top">
                <p> {props.value} </p>
                {/* accessing the value which mentioned for key but with new attribute value */}
                <Heading name= {props.name} />
                <Avatar image={props.image}/>
            </div>

            <div className="bottom">
                <Detail detailInfo={props.tel} />
                <Detail detailInfo={props.mail} />
            </div>
            
        </div>
    );
}


export default Card; 