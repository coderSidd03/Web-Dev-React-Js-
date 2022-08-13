import React from "react";
import Card from "./Card";
import contacts from '../contacts'

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            // this is required key by react
            // here for key the value will be
            // a unique value from the array
            // in this case we are using id from the contacts js's contacts array

            value = {contact.id}
            // to access the value of key we have to create another customise field
            // we can't access the value direct with {props.key} so we have to call {props.id}
            // key is not the field to use 
            name={contact.name}
            image={contact.imgURL}
            tel={contact.phone}
            mail={contact.email}
        />
    );
}

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>

            {contacts.map(createCard)}
        </div>
    );
}

export default App;
