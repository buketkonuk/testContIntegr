import React from "react";
// deleted from app.js:
{/* <ContactCard
contact={{ name: "Mr. Whiskerson", 
imgUrl: "http://placekitten.com/300/200", 
phone: "(212) 555-1234", 
email: "mr.whiskaz@catnap.meow" }}
/>
<ContactCard
contact={{
  name:"Fluffykins",
  imgUrl:"http://placekitten.com/400/200",
  phone:"(212) 555-2345",
  email:"fluff@me.com"
}} */}
export default function ContactCard(props) {
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={props.contact.imgUrl} />
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>
    );
}