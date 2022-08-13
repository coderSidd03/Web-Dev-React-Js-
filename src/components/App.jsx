import React from "react";
import Card from "./Card";
import contacts from '../contacts'
import Avatar from "./Avatar";
import Detail from "./Detail";


function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>

            <Avatar image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJlE5wp2x3SsSJSZIJGxOJ7exk98kZBCjbg&usqp=CAU' />

            <Detail detailInfo='Learning React Property' />

            <Card
                // either we can use like these
                // name="Beyonce"
                // img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                // tel="+123 456 789"
                // mail="b@beyonce.com"

                // OR
                name = {contacts[0].name}
                img = {contacts[0].imgURL}
                cell = {contacts[0].phone}
                mail = {contacts[0].email}
            />

            <Card
                name = {contacts[1].name}
                img = {contacts[1].imgURL}
                cell = {contacts[1].phone}
                mail = {contacts[1].email}
            />

            <Card
                name = {contacts[2].name}
                img = {contacts[2].imgURL}
                cell = {contacts[2].phone}
                mail = {contacts[2].email}
            />
        </div>
    );
}

export default App;
