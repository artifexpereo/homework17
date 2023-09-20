import React from "react";
import "./Contact.css"

const Contact = (props) => {
    return (
        <div className="contact">
            <div>{props.contact.firstName}</div>
            <div>{props.contact.lastName}</div>
            <div>{props.contact.phone}</div>
            <div>{props.contact.gender}</div>
        </div>
    )
}

export default Contact